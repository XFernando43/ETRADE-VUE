<script setup lang="ts">
  import Topbar from './components/commons/Topbar.vue';
  import { RouterView } from 'vue-router';

</script>

<template>
  <Topbar/>
  <v-main class="bg-grey-lighten-6">
    <v-container>
      <RouterView />
    </v-container>
  </v-main>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
