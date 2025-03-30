<script setup>
import {useRoute} from "vue-router";

const route = useRoute()

//Titel der Seite ohne "/" und mit Großbuchstaben am Anfang erhalten.
function createTitle(route) {
          //z.B. "L"                   +  "ernplattform"
  return route.charAt(1).toUpperCase() + route.slice(2)
}

</script>

<template>
  <v-card class=" text-center" :title= createTitle(route.path)>
  </v-card>
</template>

<style scoped>

</style>