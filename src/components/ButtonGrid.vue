<script setup>
import { useRouter } from 'vue-router'
import questFlow from "@/quests/QuestFlow.js";
const router = useRouter()

const props = defineProps( {
  buttonItems: Object,
})

//Hole den Questflow.
const flow = questFlow.getQuestFlow();

function handleRoute(index){
  if(props.buttonItems[index].name === "Lernplattform") {
    flow.stepCompleted("Gehe auf Lernplattform");
  }
  router.push(props.buttonItems[index].route)

}

</script>

<template>
  <!-- Übergebene Items werden hier als gridItems angezeigt.
       Klickt man auf ein Items, so wird man auf den jeweiligen übergebenen Link weitergeleitet.-->
  <v-btn v-for="(item, index) in buttonItems"

         :key="item"
         @click="handleRoute(index);">{{ props.buttonItems[index].name }}

  </v-btn>
</template>

<style scoped>
</style>