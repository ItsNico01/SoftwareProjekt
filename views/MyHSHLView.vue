<script setup>
import ButtonGrid from "@/components/ButtonGrid.vue";
import {onMounted, onUpdated} from "vue";
import questFlow from "@/quests/QuestFlow.js";

//Hole den Questflow.
const flow = questFlow.getQuestFlow();

const buttonGridItems = [
  {name:"Bibliothekskonto", route: "", style:"myHSHL"},
  {name:"Campus Office", route: "/campusOfficeLogin", style:"myHSHL"},
  {name:"Lernplattform", route:"/lernplattform", style:"myHSHL"},
  {name:"StudyAssist", route:"",style:"myHSHL"},
  {name:"Postfach", route:"", style:"myHSHL"},
]

onMounted(() => {flow.stepCompleted("Gehe auf myHSHL");})
</script>

<template>
  <v-container class="d-flex align-start bg-white fill-height">
    <v-row>
      <v-col cols="12" class="d-flex justify-center flex-wrap">
        <ButtonGrid :button-items="buttonGridItems"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
