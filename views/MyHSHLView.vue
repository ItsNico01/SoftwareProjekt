<script setup>
import ButtonGrid from "@/components/ButtonGrid.vue";
import {onMounted} from "vue";
import questFlow from "@/quests/QuestFlow.js";

//Hole den Questflow.
const flow = questFlow.getQuestFlow();

//Die übergebenen Buttonitems mit Namen und Route, auf welche
//sie nach dem Klicken weiterleiten.
const buttonGridItems = [
  {name:"Bibliothekskonto", route: ""},
  {name:"Campus Office", route: "/campusOfficeLogin"},
  {name:"Lernplattform", route:"/lernplattform"},
  {name:"StudyAssist", route:""},
  {name:"Postfach", route:""},
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
