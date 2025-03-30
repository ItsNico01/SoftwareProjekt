<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import {useRoute, useRouter} from "vue-router";
  import WelcomeView from "../views/WelcomeView.vue";
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
