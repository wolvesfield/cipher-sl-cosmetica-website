import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { User, AuthState, SavedAddress, UserPreferences } from './authTypes'
import { authAPI, APIError } from './api/client'
import { toast } from 'sonner'

interface UserWithDetails extends User {
  addresses: SavedAddress[];
  preferences: UserPreferences;
}

interface AuthContextType extends AuthState {
  signUp: (email: string, password: string, firstName: string, lastName: string, phone?: string) => Promise<boolean>
  signIn: (email: string, password: string) => Promise<boolean>
  signOut: () => void
  continueAsGuest: () => void
  updateUser: (updates: Partial<User> & { preferences?: Partial<UserPreferences> }) => Promise<void>
  addAddress: (address: Omit<SavedAddress, 'id' | 'userId' | 'isDefault' | 'createdAt'>) => Promise<void>
  updateAddress: (id: string, address: Partial<SavedAddress>) => Promise<void>
  deleteAddress: (id: string) => Promise<void>
  setDefaultAddress: (id: string) => Promise<void>
  isReady: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<UserWithDetails | null>(null)
  const [isGuest, setIsGuest] = useState(false)
  const [isReady, setIsReady] = useState(false)

  const isAuthenticated = currentUser !== null && !isGuest

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('auth_token')

      if (token) {
        try {
          const { user } = await authAPI.getMe()
          setCurrentUser(user)
        } catch (error) {
          // Token invalid or expired
          localStorage.removeItem('auth_token')
        }
      }

      setIsReady(true)
    }

    checkAuth()
  }, [])

  const signUp = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phone?: string
  ): Promise<boolean> => {
    try {
      const { user } = await authAPI.register({
        email,
        password,
        firstName,
        lastName,
        phone
      })

      setCurrentUser(user)
      setIsGuest(false)
      toast.success('Account created successfully!')
      return true
    } catch (error) {
      if (error instanceof APIError) {
        toast.error(error.message)
      } else {
        toast.error('Failed to create account')
      }
      console.error(error)
      return false
    }
  }

  const signIn = async (email: string, password: string): Promise<boolean> => {
    try {
      const { user } = await authAPI.login(email, password)

      setCurrentUser(user)
      setIsGuest(false)
      toast.success(`Welcome back, ${user.firstName}!`)
      return true
    } catch (error) {
      if (error instanceof APIError) {
        toast.error(error.message)
      } else {
        toast.error('Failed to sign in')
      }
      console.error(error)
      return false
    }
  }

  const signOut = async () => {
    authAPI.logout()
    setCurrentUser(null)
    setIsGuest(false)
    toast.success('Signed out successfully')
  }

  const continueAsGuest = () => {
    setIsGuest(true)
    toast.success('Continuing as guest')
  }

  const updateUser = async (updates: Partial<User> & { preferences?: Partial<UserPreferences> }) => {
    if (!currentUser) return

    try {
      const { user } = await authAPI.updateProfile(updates)
      setCurrentUser(user)
      toast.success('Profile updated successfully')
    } catch (error) {
      toast.error('Failed to update profile')
      console.error(error)
    }
  }

  const addAddress = async (address: Omit<SavedAddress, 'id' | 'userId' | 'isDefault' | 'createdAt'>) => {
    if (!currentUser) return

    try {
      await authAPI.addAddress(address)

      // Refresh user data
      const { user } = await authAPI.getMe()
      setCurrentUser(user)

      toast.success('Address saved successfully')
    } catch (error) {
      toast.error('Failed to save address')
      console.error(error)
    }
  }

  const updateAddress = async (id: string, updates: Partial<SavedAddress>) => {
    // Note: This would require a new API endpoint for updating addresses
    // For now, we can delete and re-add, or implement the endpoint
    toast.error('Address update not yet implemented')
  }

  const deleteAddress = async (id: string) => {
    if (!currentUser) return

    try {
      await authAPI.deleteAddress(id)

      // Refresh user data
      const { user } = await authAPI.getMe()
      setCurrentUser(user)

      toast.success('Address deleted successfully')
    } catch (error) {
      toast.error('Failed to delete address')
      console.error(error)
    }
  }

  const setDefaultAddress = async (id: string) => {
    if (!currentUser) return

    try {
      await authAPI.setDefaultAddress(id)

      // Refresh user data
      const { user } = await authAPI.getMe()
      setCurrentUser(user)
    } catch (error) {
      toast.error('Failed to set default address')
      console.error(error)
    }
  }

  if (!isReady) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent mb-4"></div>
          <p className="text-muted-foreground">Initializing...</p>
        </div>
      </div>
    )
  }

  return (
    <AuthContext.Provider
      value={{
        user: currentUser || null,
        isAuthenticated,
        isGuest,
        signUp,
        signIn,
        signOut,
        continueAsGuest,
        updateUser,
        addAddress,
        updateAddress,
        deleteAddress,
        setDefaultAddress,
        isReady
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
