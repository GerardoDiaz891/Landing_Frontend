<template>
  <nav class="absolute top-0 right-0 z-20 p-6">
    <div class="flex items-center space-x-6">
      <router-link
        to="/login"
        class="text-white hover:text-emerald-300 transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-emerald-300 after:transition-all after:duration-300 hover:after:w-full"
      >
        Iniciar sesión
      </router-link>
      <router-link
        to="/dashboard"
        class="text-white hover:text-emerald-300 transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-emerald-300 after:transition-all after:duration-300 hover:after:w-full"
      >
        Dashboard
      </router-link>
    </div>
  </nav>
</template>
