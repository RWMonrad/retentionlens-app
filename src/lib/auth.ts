// Authentication utility functions
export interface User {
  email: string
  firstName?: string
  lastName?: string
  company?: string
  role?: 'admin' | 'user'
}

export const AUTH_STORAGE_KEY = 'isAuthenticated'
export const USER_STORAGE_KEY = 'userEmail'
export const USER_ROLE_KEY = 'userRole'

// Admin users configuration
const ADMIN_USERS = {
  'rwmonrad@gmail.com': {
    password: '!s0m5x8RWM',
    firstName: 'Rasmus',
    lastName: 'Monrad',
    company: 'GlassBox Metrics',
    role: 'admin' as const
  },
  'demo@glassbox.com': {
    password: 'demo123',
    firstName: 'Demo',
    lastName: 'User',
    company: 'GlassBox Demo',
    role: 'user' as const
  }
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(AUTH_STORAGE_KEY) === 'true'
}

// Check if user is admin
export function isAdmin(): boolean {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(USER_ROLE_KEY) === 'admin'
}

// Get current user
export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null
  
  const email = localStorage.getItem(USER_STORAGE_KEY)
  const role = localStorage.getItem(USER_ROLE_KEY) as 'admin' | 'user' | null
  
  if (!email) return null
  
  const adminUser = ADMIN_USERS[email as keyof typeof ADMIN_USERS]
  if (adminUser) {
    return {
      email,
      firstName: adminUser.firstName,
      lastName: adminUser.lastName,
      company: adminUser.company,
      role: adminUser.role
    }
  }
  
  return {
    email,
    firstName: 'Demo',
    lastName: 'User',
    company: 'GlassBox Demo',
    role: role || 'user'
  }
}

// Login user
export function loginUser(email: string, role: 'admin' | 'user' = 'user'): void {
  localStorage.setItem(AUTH_STORAGE_KEY, 'true')
  localStorage.setItem(USER_STORAGE_KEY, email)
  localStorage.setItem(USER_ROLE_KEY, role)
}

// Logout user
export function logoutUser(): void {
  localStorage.removeItem(AUTH_STORAGE_KEY)
  localStorage.removeItem(USER_STORAGE_KEY)
  localStorage.removeItem(USER_ROLE_KEY)
}

// Enhanced authentication with admin support
export function authenticateUser(email: string, password: string): { success: boolean; user?: User; error?: string } {
  const adminUser = ADMIN_USERS[email as keyof typeof ADMIN_USERS]
  
  if (adminUser && adminUser.password === password) {
    return {
      success: true,
      user: {
        email,
        firstName: adminUser.firstName,
        lastName: adminUser.lastName,
        company: adminUser.company,
        role: adminUser.role
      }
    }
  }
  
  return {
    success: false,
    error: 'Invalid email or password'
  }
}

// Protected routes that require authentication
export const PROTECTED_ROUTES = [
  '/dashboard',
  '/analytics',
  '/customers',
  '/reports',
  '/benchmarking',
  '/metrics',
  '/alerts',
  '/settings'
]

// Admin-only routes
export const ADMIN_ROUTES = [
  '/admin',
  '/admin/users',
  '/admin/settings',
  '/admin/analytics'
]

// Check if a route is protected
export function isProtectedRoute(pathname: string): boolean {
  return PROTECTED_ROUTES.some(route => pathname.startsWith(route))
}

// Check if a route requires admin access
export function isAdminRoute(pathname: string): boolean {
  return ADMIN_ROUTES.some(route => pathname.startsWith(route))
}

