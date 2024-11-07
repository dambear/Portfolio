<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavigationBarVue from './components/shared/NavigationBar.vue'

import NavigationBar from './components/shared/NavigationBar.vue'
</script>

<template>
  <div id="panel-1" class="pt-8 pl-28">
    <div>
      <nav class="flex gap-4">
        <RouterLink class="bg-red-500 py-2 px-6 flex justify-center items-center" to="/">
          Home
        </RouterLink>

        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    
    <NavigationBar />

  </div>

  <div id="panel-2" class="">
    <RouterView />
  </div>
</template>

<style></style>
