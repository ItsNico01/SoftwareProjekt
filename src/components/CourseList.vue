<script setup>
const props = defineProps( {
  major: String
})
//TODO:Value ändern
const listItems = [
  { type: 'subheader', title: 'Studiengang' },
  {
    title: 'Fachschaft ' + props.major.toUpperCase(),
    value: 1,
  },
  {
    title: 'Sommersemester 2025',
    value: 2,
  },
  { type: 'divider' },
  { type: 'subheader', title: 'Hochschulweite Kurse' },
  {
    title: 'Stundenplanung',
    value: 4,
  },
  {
    title: 'Prüfungsplanung',
    value: 5,
  },
]


</script>

<template>

  <v-card title="Kurse" class="fill-height">
    <v-list :items="listItems"></v-list>
  </v-card>

</template>

<style scoped>


</style>