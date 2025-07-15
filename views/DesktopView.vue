<script setup>
import ButtonGrid from "@/components/ButtonGrid.vue";
import Avatar from "@/components/Avatar.vue";
import LevelBar from "@/components/LevelBar.vue";
import {useRoute, useRouter} from "vue-router";
import SingleButton from "@/components/SingleButton.vue";

import userStore from "@/user/userStore.js";

const route = useRoute();
const style = "offButton";

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
    <Avatar :css="'home'" :src="user.getAvatar"/>
    <h1>{{user.getFirstName}}</h1>

    <LevelBar/>
    <ButtonGrid :button-items="buttonGridItems" />
    <SingleButton :path="route.path" :css="style"/>


</template>

<style scoped>

h1 {
  text-align: center;
}


</style>