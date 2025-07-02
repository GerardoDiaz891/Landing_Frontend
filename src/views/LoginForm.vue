<template>
  <div
    class="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
    style="background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')"
  >
    <!-- Overlay oscuro con gradiente -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-emerald-900/70"></div>

    <!-- Contenedor del formulario -->
    <div
      class="relative z-10 w-full max-w-md p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl text-white"
    >
      <h2 class="text-3xl font-bold text-center mb-6">Iniciar sesión</h2>

      <form @submit.prevent="handleLogin" class="space-y-5">
        <div>
          <label for="email" class="block text-sm font-medium mb-1">Correo electrónico</label>
          <input
            v-model="form.email"
            type="email"
            required
            placeholder="correo@ejemplo.com"
            class="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium mb-1">Contraseña</label>
          <input
            v-model="form.password"
            type="password"
            required
            placeholder="••••••••"
            class="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          />
        </div>

        <button
          type="submit"
          class="w-full mt-4 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-emerald-500 hover:to-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/20 cursor-pointer"
        >
          Ingresar
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const form = reactive({
  email: '',
  password: '',
})

const handleLogin = () => {
  console.log('Iniciar sesión con:', form)
  // Aquí podrías hacer la petición al backend
}
</script>
