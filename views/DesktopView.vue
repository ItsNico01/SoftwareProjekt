<script setup>
import ButtonGrid from "@/components/ButtonGrid.vue";
import Avatar from "@/components/Avatar.vue";
import TodoList from "@/components/TodoList.vue";
import LevelBar from "@/components/LevelBar.vue";
import {useRoute, useRouter} from "vue-router";
import SingleButton from "@/components/SingleButton.vue";
import {onMounted, reactive, ref} from "vue";
import {loadUser, user} from "@/user/userStore.js";

const route = useRoute();
const style = "offButton";
//User aus dem LocalStorage holen
loadUser();



</script>

<template>
  <div class="window">
    <Avatar :css="'home'" :src="user.getAvatar"/>
    <h1>{{user.getFirstName}}</h1>

    <LevelBar/>
    <ButtonGrid/>
    <SingleButton :path="route.path" :css="style"/>

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
h1 {
  text-align: center;
}


</style>