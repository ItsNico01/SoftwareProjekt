<script setup>
import TodoList from "@/components/TodoList.vue";
import {RouterView} from "vue-router";
</script>

<template>
  <v-container>
    <v-row class="mb-0" >
      <v-col cols="12" class="d-flex align-center justify-center mb-0 pb-1">
        <!-- Desktop -->
        <v-sheet
            border="xl"
            class="custom-border"
            height="550"
            max-width="1200"
            width="100%"
            >
          <!-- Content -->
          <router-view/>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row class=" d-flex mt-0 mb-n10 pb-0">
      <v-col cols="6" class="d-flex mt-0 pt-0 pr-0 mb-n10 pb-0">
        <!--Aufgaben -->
        <TodoList
            class=" w-75 pt-0 ml-2 mt-n12"/>
      </v-col>
      <v-col cols="6" class="d-flex   mt-n2 mb-n10 pt-0 pb-0 pl-0">
        <!-- Vertikaler Ständer-->
        <v-sheet
            border="black xl"
            color="black"
            height="60%"
            width="50">

        </v-sheet>
      </v-col>
    </v-row>
    <v-row >
      <v-col cols="12" class="d-flex align-center justify-center mt-n16 mb-0 pt-0 pb-0">
        <!-- Horizontaler Ständer-->
        <v-sheet
            border="xl"
            color="black"
            height="45"
            width="95%"
            max-width="1200">

        </v-sheet>

      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.custom-border {
  /* Vuetify-Theme-Variable überschreiben */
  --v-border-color: 0, 0, 0; /* schwarz (RGB) */
  --v-border-opacity: 1;
  background-color: white !important;
}
</style>