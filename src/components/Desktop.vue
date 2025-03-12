<script setup>

import TodoList from "@/components/TodoList.vue";
import {RouterView} from "vue-router";
</script>

<template>
  <div class="window">
    <!-- Content -->
    <router-view/>
  </div>

  <div class="standVertical"></div>
  <div class="standHorizontal"></div>
  <TodoList/>
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
</style>