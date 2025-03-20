<script setup>
import ButtonGrid from "@/components/ButtonGrid.vue";
import Avatar from "@/components/Avatar.vue";
import TodoList from "@/components/TodoList.vue";
import LevelBar from "@/components/LevelBar.vue";
import {useRoute, useRouter} from "vue-router";
import SingleButton from "@/components/SingleButton.vue";
import {onMounted, reactive, ref} from "vue";
//import {loadUser, user} from "@/user/userStore.js";
import {userStore} from "@/user/userStore.js";

const route = useRoute();
const style = "offButton";

//User aus dem LocalStorage holen
const user = userStore.getUser();

const buttonGridItems = [
    {name: "myHSHL", route: "/login", style:"home"},
    {name: "Badges", route: "", style:"home"},
    {name: "Einstellungen", route: "", style:"home"},
]

console.log(user.getAvatar);

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