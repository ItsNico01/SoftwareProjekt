<script setup>
  import {ref} from "vue";
  import { RouterLink, RouterView } from 'vue-router'
  import DesktopView from "./components/Desktop.vue";
  import WelcomeView from "../views/WelcomeView.vue";

</script>

<template>

  <!-- <DesktopView/>-->
  <!--<router-view />-->

  <WelcomeView/>

</template>

<style scoped>

</style>
