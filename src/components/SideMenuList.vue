<script setup>
import {ref} from "vue";

const props = defineProps( {
  listItems: Array
})

//Ausgewählter Menüpunkt
const selected = ref([""]);

defineExpose({selected});

</script>

<template>

  <v-card title="Kurse" class="text-break" >
    <v-list :items="props.listItems" v-model:selected="selected"></v-list>

  </v-card>

</template>
<style scoped>


</style>