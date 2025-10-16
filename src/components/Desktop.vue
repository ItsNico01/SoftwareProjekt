<script setup>

import TodoList from "@/components/TodoList.vue";
import {RouterView} from "vue-router";
</script>

<template>
<!--  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="window">
          &lt;!&ndash; Content &ndash;&gt;
          <router-view/>
        </div>

        <div class="standVertical"></div>
        <div class="standHorizontal"></div>

        <TodoList class="todo w-25 position-absolute"/>

      </v-col>
    </v-row>
  </v-container>-->

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
.window {
  width: 90%;
  height: 40vw;
  border: 1vw solid black;
  margin-top: 2vw;
  margin-inline: auto;
}
.standVertical {
  width: 5%;
  border-top: 1vw solid;
  background-color: black;
  margin-inline: auto;
  height: 2vw;
}
.standHorizontal {
  width: 90%;
  border-top: 1vw solid black;
  margin-inline: auto;
}
.todo {
  margin-top: -10vw;
}
.custom-border {
  /* Vuetify-Theme-Variable überschreiben */
  --v-border-color: 0, 0, 0; /* schwarz (RGB) */
  --v-border-opacity: 1;
  background-color: white !important;
}
</style>