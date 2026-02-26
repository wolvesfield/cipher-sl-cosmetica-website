import { User, SavedAddress, UserPreferences } from '../authTypes';

const API_BASE_URL = '/api';

class APIError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'APIError';
  }
}

async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = localStorage.getItem('auth_token');

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(options.headers || {})
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers
  });

  const data = await response.json();

  if (!response.ok) {
    throw new APIError(response.status, data.error || 'Request failed');
  }

  return data;
}

export const authAPI = {
  async register(data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone?: string;
  }): Promise<{ token: string; user: User & { addresses: SavedAddress[]; preferences: UserPreferences } }> {
    const response = await fetchAPI<{ token: string; user: User & { addresses: SavedAddress[]; preferences: UserPreferences } }>(
      '/auth/register',
      {
        method: 'POST',
        body: JSON.stringify(data)
      }
    );

    // Store token
    localStorage.setItem('auth_token', response.token);

    return response;
  },

  async login(email: string, password: string): Promise<{ token: string; user: User & { addresses: SavedAddress[]; preferences: UserPreferences } }> {
    const response = await fetchAPI<{ token: string; user: User & { addresses: SavedAddress[]; preferences: UserPreferences } }>(
      '/auth/login',
      {
        method: 'POST',
        body: JSON.stringify({ email, password })
      }
    );

    // Store token
    localStorage.setItem('auth_token', response.token);

    return response;
  },

  async getMe(): Promise<{ user: User & { addresses: SavedAddress[]; preferences: UserPreferences } }> {
    return fetchAPI('/auth/me');
  },

  async updateProfile(updates: {
    firstName?: string;
    lastName?: string;
    phone?: string;
    preferences?: {
      newsletter?: boolean;
      smsUpdates?: boolean;
      language?: 'en' | 'es' | 'de' | 'pl' | 'nl' | 'it' | 'fr';
      currency?: 'COP' | 'USD' | 'CAD' | 'BRL' | 'MXN';
    };
  }): Promise<{ user: User & { addresses: SavedAddress[]; preferences: UserPreferences } }> {
    return fetchAPI('/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(updates)
    });
  },

  async addAddress(address: Omit<SavedAddress, 'id' | 'userId' | 'isDefault' | 'createdAt'>): Promise<{ address: SavedAddress }> {
    return fetchAPI('/auth/addresses', {
      method: 'POST',
      body: JSON.stringify(address)
    });
  },

  async setDefaultAddress(addressId: string): Promise<void> {
    await fetchAPI(`/auth/addresses/${addressId}/default`, {
      method: 'PUT'
    });
  },

  async deleteAddress(addressId: string): Promise<void> {
    await fetchAPI(`/auth/addresses/${addressId}`, {
      method: 'DELETE'
    });
  },

  logout() {
    localStorage.removeItem('auth_token');
  }
};

export { APIError };
