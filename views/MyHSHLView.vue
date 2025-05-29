<script setup>
import ButtonGrid from "@/components/ButtonGrid.vue";
import {onMounted, onUpdated} from "vue";
import {questFlow} from "@/quests/QuestFlow.js";

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
<ButtonGrid :button-items="buttonGridItems"/>
</template>

<style scoped>

</style>
