<script setup>

import ButtonGrid from "@/components/ButtonGrid.vue";
import Avatar from "@/components/Avatar.vue";
import OffButton from "@/components/OffButton.vue";
import TodoList from "@/components/TodoList.vue";
import LevelBar from "@/components/LevelBar.vue";
import {useRoute, useRouter} from "vue-router";
import DesktopView from "@/components/Desktop.vue";
import LoginView from "./LoginView.vue";
import SingleButton from "@/components/SingleButton.vue";
import {reactive} from "vue";

const route = useRoute();
const style = "offButton";

</script>

<template>
  <Avatar/>
  <LevelBar/>
  <ButtonGrid/>
  <SingleButton :path="route.path" :css="style"/>
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