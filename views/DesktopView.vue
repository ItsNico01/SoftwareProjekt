<script setup>
import ButtonGrid from "@/components/ButtonGrid.vue";
import Avatar from "@/components/Avatar.vue";
import LevelBar from "@/components/LevelBar.vue";
import {useRoute, useRouter} from "vue-router";
import SingleButton from "@/components/SingleButton.vue";

import userStore from "@/user/userStore.js";

const route = useRoute();

//User aus dem LocalStorage holen
const user = userStore.getUser();

//Menüpunkte für das ButtonGrid
const buttonGridItems = [
    {name: "myHSHL", route: "/login", style:"home"},
    {name: "Badges", route: "/badges", style:"home"},
    {name: "Einstellungen", route: "", style:"home"},
]


</script>

<template>
<!--    <Avatar :size="'180'" :src="user.getAvatar"/>
    <h1>{{user.getFirstName}}</h1>
    <LevelBar :userLevel="user.getLevel"/>
    <ButtonGrid :button-items="buttonGridItems" />-->

<v-container class="bg-white">
  <v-row class="justify-center" >
    <v-col class="d-flex justify-center" cols="12">
      <v-card variant="flat" class="pt-10 mb-11">
        <Avatar :size="'100'" :src="user.getAvatar"/>
        <h1>{{user.getFirstName}}</h1>
        <LevelBar :userLevel="user.getLevel"/>
        <ButtonGrid :button-items="buttonGridItems" />
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<style scoped>

h1 {
  text-align: center;
}


</style>