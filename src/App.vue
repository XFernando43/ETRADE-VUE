<script setup lang="ts">
  import Topbar from './components/commons/Topbar.vue';
  import HeroProducts from './components/Sell/HeroProducts.vue';
  import { RouterView } from 'vue-router';
  import PolicesItems from './components/Sell/PolicesItems.vue'; 
  import OptionsBar from './components/Sell/OptionsBar.vue';
  import NewArrivals from './components/Sell/NewArrivals.vue';
</script>

<template>
  <Topbar/>
  <OptionsBar/>
  <HeroProducts/>
  <PolicesItems/>
  <NewArrivals/>
  <main class="bg-grey-lighten-6">
      <RouterView />
  </main>

</template>

<style scoped>
</style>
