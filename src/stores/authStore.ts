// stores/authStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IAuthResponse, ILoginUser } from '@/interfaces/IUser'
import { loginUser } from '@/services/authService'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null)
  const user = ref<IAuthResponse | null>(null)

  const login = async (credentials: ILoginUser) => {
    try {
      const response = await loginUser(credentials)
      token.value = response.token
      user.value = response.user

      // Guardar en localStorage para persistencia
      localStorage.setItem('token', response.token)
      localStorage.setItem('user', JSON.stringify(response.user))
    } catch (error) {
      console.error('Error al iniciar sesión:', error)
      throw error
    }
  }

  const logout = () => {
    token.value = null
    user.value = null
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  return {
    token,
    user,
    login,
    logout,
  }
})
