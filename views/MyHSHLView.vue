<script setup>
import ButtonGrid from "@/components/ButtonGrid.vue";

const buttonGridItems = [
  {name:"Bibliothekskonto", route: "", style:"myHSHL"},
  {name:"Campus Office", route: "/campusOffice", style:"myHSHL"},
  {name:"Lernplattform", route:"/lernplattform", style:"myHSHL"},
  {name:"StudyAssist", route:"",style:"myHSHL"},
  {name:"Postfach", route:"", style:"myHSHL"},
]
</script>

<template>
<ButtonGrid :button-items="buttonGridItems"/>
</template>

<style scoped>

</style>
