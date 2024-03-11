<script setup lang="ts">
  import Topbar from './components/commons/Topbar.vue';
  import HeroProducts from './components/Sell/HeroProducts.vue';
  import { RouterView } from 'vue-router';

</script>

<template>
  <Topbar/>
  <HeroProducts/>
  <main class="bg-grey-lighten-6">
      <RouterView />
  </main>

</template>

<style scoped>
</style>
