import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from "react-error-boundary";
import "@github/spark/spark"

import App from './App.tsx'
import { ErrorFallback } from './ErrorFallback.tsx'
import { initFontLoader } from './lib/fontLoader.ts'

import "./main.css"
import "./styles/theme.css"
import "./index.css"

// --- Google Translate React Crash Fix ---
// Prevent React from throwing a "NotFoundError: Failed to execute 'removeChild' on 'Node'" 
// or "Failed to execute 'insertBefore' on 'Node'" error when Google Translate aggressively overrides DOM nodes.
if (typeof Node === 'function' && Node.prototype) {
  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function <T extends Node>(child: T): T {
    if (child.parentNode !== this) {
      if (console && console.warn) {
        console.warn('Google Translate blocked React from crashing on removeChild', child, this);
      }
      return child;
    }
    return originalRemoveChild.apply(this, arguments as any) as T;
  };

  const originalInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function <T extends Node>(newNode: T, referenceNode: Node | null): T {
    if (referenceNode && referenceNode.parentNode !== this) {
      if (console && console.warn) {
        console.warn('Google Translate blocked React from crashing on insertBefore', referenceNode, this);
      }
      return newNode;
    }
    return originalInsertBefore.apply(this, arguments as any) as T;
  };
}
// ------------------------------------------

initFontLoader()

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <App />
  </ErrorBoundary>
)
