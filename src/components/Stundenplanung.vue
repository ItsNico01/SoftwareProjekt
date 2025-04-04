<script setup>
const props = defineProps( {
  major: String
})
//TODO: Value ändern
const listItems = [
  {
    title: props.major.toUpperCase() + " 1",
    value: 2,
  },
  {
    title: props.major.toUpperCase() + " 3",
    value: 2,
  },
  {
    title: props.major.toUpperCase() + " 6",
    value: 2,
  },
]
</script>

<template>
  <v-card title="Stundenplanung" class="fill-height">
    <v-list :items="listItems"></v-list>
  </v-card>
</template>

<style scoped>

</style>