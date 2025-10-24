<script setup>
  import {RouterView } from 'vue-router'
  import {useRoute} from "vue-router";
  import Desktop from "@/components/Desktop.vue";

  const route = useRoute();
</script>


<template>
  <v-app>
    <!-- Desktop wird immer angezeigt, außer bei der WelcomeView-->
    <router-view v-if="route.path==='/'"/>
    <Desktop v-else/>
  </v-app>
</template>

<style scoped>

</style>
