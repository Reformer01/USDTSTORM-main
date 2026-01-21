import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface User {
  id: string
  email: string
  name: string
  avatar?: string
  balance: number
  createdAt: string
}

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, name: string) => Promise<void>
  logout: () => void
  initializeAuth: () => void
  updateProfile: (data: Partial<User>) => Promise<void>
}

export const useAuthStore = create<AuthState>()(
  persist(
    immer((set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,

      initializeAuth: () => {
        const token = localStorage.getItem('auth_token')
        const user = localStorage.getItem('auth_user')
        
        if (token && user) {
          set((state) => {
            state.token = token
            state.user = JSON.parse(user)
            state.isAuthenticated = true
          })
        }
      },

      login: async (email: string, _password: string) => {
        set((state) => { state.isLoading = true })
        
        try {
          // Mock authentication - replace with actual API when available
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          // Mock successful login
          const mockUser: User = {
            id: '1',
            email,
            name: email.split('@')[0],
            balance: 10000,
            createdAt: new Date().toISOString()
          }
          
          const mockToken = 'mock-jwt-token-' + Date.now()
          
          set((state) => {
            state.user = mockUser
            state.token = mockToken
            state.isAuthenticated = true
            state.isLoading = false
          })
          
          localStorage.setItem('auth_token', mockToken)
          localStorage.setItem('auth_user', JSON.stringify(mockUser))
        } catch (error) {
          set((state) => { state.isLoading = false })
          throw error
        }
      },

      register: async (email: string, _password: string, name: string) => {
        set((state) => { state.isLoading = true })
        
        try {
          // Mock registration - replace with actual API when available
          await new Promise(resolve => setTimeout(resolve, 1500))
          
          // Mock successful registration
          const mockUser: User = {
            id: Date.now().toString(),
            email,
            name,
            balance: 5000, // Starting balance for new users
            createdAt: new Date().toISOString()
          }
          
          const mockToken = 'mock-jwt-token-' + Date.now()
          
          set((state) => {
            state.user = mockUser
            state.token = mockToken
            state.isAuthenticated = true
            state.isLoading = false
          })
          
          localStorage.setItem('auth_token', mockToken)
          localStorage.setItem('auth_user', JSON.stringify(mockUser))
        } catch (error) {
          set((state) => { state.isLoading = false })
          throw error
        }
      },

      logout: () => {
        set((state) => {
          state.user = null
          state.token = null
          state.isAuthenticated = false
        })
        
        localStorage.removeItem('auth_token')
        localStorage.removeItem('auth_user')
      },

      updateProfile: async (data: Partial<User>) => {
        const { user } = get()
        
        try {
          // Mock profile update - replace with actual API when available
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          const updatedUser = { ...user!, ...data }
          
          set((state) => {
            state.user = updatedUser
          })
          
          localStorage.setItem('auth_user', JSON.stringify(updatedUser))
        } catch (error) {
          throw error
        }
      },
    })),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
)
