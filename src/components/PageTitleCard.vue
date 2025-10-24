<script setup>
import {useRoute} from "vue-router";

const route = useRoute()

const props = defineProps( {
  title: String,
})

//Titel der Seite ohne "/" und mit Großbuchstaben am Anfang erhalten.
function createTitle(title=route.path) {
  if (title.charAt(0) === "/") {
    //z.B. "L"+ "ernplattform"
    return title.charAt(1).toUpperCase() + title.slice(2);
  }else{
    return title;
  }
}
</script>

<template>
  <v-card class=" text-center" :title= createTitle(props.title)>
  </v-card>
</template>

<style scoped>

</style>