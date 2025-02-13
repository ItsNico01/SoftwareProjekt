<script setup>
  import {ref} from "vue";
  import { RouterLink, RouterView } from 'vue-router'
  import DesktopView from "./components/Desktop.vue";

  const msg = ref("Hallo");
</script>

<template>
    <DesktopView />
</template>

<style scoped>

</style>
