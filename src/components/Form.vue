<template>
  <div
    class="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 overflow-hidden w-full max-w-md mx-auto lg:mx-0"
  >
    <div class="p-8">
      <div class="mb-6 text-center">
        <h2 class="text-2xl font-bold text-white">Contáctanos</h2>
        <p class="text-emerald-100 mt-2">Completa el formulario y nos pondremos en contacto</p>
      </div>

      <form class="space-y-5" @submit.prevent="handleSubmit">
        <div>
          <label class="block text-sm font-medium text-white/80 mb-1">Nombre completo</label>
          <input
            v-model="form.name"
            type="text"
            class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent transition"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-white/80 mb-1">Correo electrónico</label>
          <input
            v-model="form.email"
            type="email"
            class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent transition"
            placeholder="tu@email.com"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-white/80 mb-1">Teléfono</label>
          <input
            v-model="form.phone"
            type="tel"
            class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent transition"
            placeholder="+1234567890"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-white/80 mb-1">Mensaje</label>
          <textarea
            v-model="form.message"
            rows="3"
            class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent transition"
            placeholder="Cuéntanos sobre tu viaje ideal"
            required
          ></textarea>
        </div>

        <!--Recaptcha-->
        <div class="g-recaptcha" data-sitekey="6LcUZmsrAAAAAED4P8m9xlzAJ7Z7G-TRlqy16rc4"></div>

        <button
          type="submit"
          class="w-full mt-4 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-emerald-500 hover:to-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/20"
        >
          Enviar mensaje
          <svg class="w-4 h-4 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useContactStore } from '@/stores/contactStore'

const contactStore = useContactStore()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const handleSubmit = async () => {
  // Obtener token generado por reCAPTCHA
  const recaptchaToken = (window as any).grecaptcha.getResponse()

  if (!recaptchaToken) {
    alert('Por favor verifica que no eres un robot.')
    return
  }

  // Enviar el token junto con el formulario
  await contactStore.addContact({
    ...form,
    token: recaptchaToken,
  })

  if (!contactStore.error) {
    alert('Mensaje enviado con éxito.')
    // Limpiar campos
    form.name = ''
    form.email = ''
    form.phone = ''
    form.message = ''
    // Limpiar reCAPTCHA (para que se pueda enviar otra vez)
    grecaptcha.reset()
  } else {
    alert(contactStore.error)
  }
}
</script>
