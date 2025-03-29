<script setup>

const listItems = [
  { type: 'subheader', title: 'Studiengang' },
  {
    title: 'Fachschaft',
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
  <v-col
      class=" ml-auto"
      xs="3"
      sm="3"
      md="3"
      lg="5"
      xl="5"
      xxl="2">
    <v-card

        max-width="300"

    >
      <v-list :items="listItems"></v-list>
    </v-card>
  </v-col>

</template>

<style scoped>


</style>