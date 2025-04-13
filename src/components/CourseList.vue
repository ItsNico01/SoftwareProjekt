<script setup>
import {ref} from "vue";

const props = defineProps( {
  major: String
})
const selected = ref("");

defineExpose({selected});
//TODO:Value ändern
const listItems = [
  { type: 'subheader', title: 'Studiengang' },
  {
    title: 'Fachschaft ' + props.major.toUpperCase(),
    value: 'fachschaft_' + props.major.toUpperCase(),
  },
  {
    title: 'Sommersemester '+ new Date().getFullYear().toString() ,
    value: 'ss_'+ new Date().getFullYear().toString(),
  },
  { type: 'divider' },
  { type: 'subheader', title: 'Hochschulweite Kurse' },
  {
    title: 'Stundenplanung',
    value: 'stundenplanung',
  },
  {
    title: 'Prüfungsplanung',
    value: 'pruefungsplanung',
  },
]



</script>

<template>

  <v-card title="Kurse" class="fill-height">
    <v-list :items="listItems" v-model:selected="selected"></v-list>
  </v-card>
</template>
<style scoped>


</style>