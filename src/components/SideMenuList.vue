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

  <v-card title="Kurse" class="text-break scroll" >
    <v-list :items="props.listItems" v-model:selected="selected"></v-list>

  </v-card>

</template>
<style scoped>
.scroll {
  height: calc(85vh - 200px);
  overflow-y: auto;
}

</style>