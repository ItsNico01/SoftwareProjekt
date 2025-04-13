<script setup>
import {ref} from "vue";

const selected = ref("");
let timeTable;

const listItems = [
  {
    title: "AIS 1",
    value: "AIS_1",
  },
  {
    title: "AIS 3",
    value: "AIS_3",
  },
  { type: 'divider' },
  {
    title: "CVD 1",
    value: "CVD_1",
  },
  {
    title: "CVD 3",
    value: "CVD_3",
  },
]

//URL zusammenbauen, sowie den angeklickten Listenpunkt auf null setzen.
//Sonst kann ein Listenpunkt nicht 2x hintereinander angeklickt werden.
function buildTimeTableURL() {
  timeTable = new URL(`../assets/Stundenplan/${selected.value[0]}.png`, import.meta.url).href
  selected.value =null
}


</script>

<template>
  <v-card title="Stundenplanung" class="fill-height">
    <v-list :items="listItems" v-model:selected="selected" @click="buildTimeTableURL">
    </v-list>

    <!-- Overlay zeigt den Stundenplan an-->
    <v-overlay

      activator="parent"
      location-strategy="connected"
      scroll-strategy="block"
      location="center"
      >
      <v-img
          :width="1000"
          aspect-ratio="16/9"
          cover
          :src= timeTable
          location="top center"
          inline
      ></v-img>
    </v-overlay>

  </v-card>
</template>

<style scoped>

</style>