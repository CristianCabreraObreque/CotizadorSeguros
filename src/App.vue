<template>
  <div class="flex min-h-screen">
    <SidebarMenu />
    <div class="flex-1 flex flex-col">
      <AppHeader />

      <main class="flex-1 p-6" style="margin-left: 16rem; margin-top: 5rem;">
        <router-view />
      </main>

      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import SidebarMenu from './components/SidebarMenu.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>
