<script setup>
import Logo from "@/components/icons/logo.vue";
import SideMenuList from "@/components/SideMenuList.vue";
import userStore from "@/user/userStore.js";
import PageTitleCard from "@/components/PageTitleCard.vue";
import Stundenplanung from "@/components/Stundenplanung.vue";
import {ref} from "vue";
import {useRoute} from "vue-router";
import questFlow from "@/quests/QuestFlow.js";

//User aus dem LocalStorage holen
const user = userStore.getUser();

const route = useRoute()

//Ausgewählter Menüpunkt
const selected = ref("");

//SideMenuList Items
const listItems = [
  { type: 'subheader', title: 'Studiengang' },
  {
    title: 'Fachschaft ' + user.getMajor.toUpperCase(),
    value: 'fachschaft_' + user.getMajor.toUpperCase(),
  },
  {
    title: 'Sommersemester '+ new Date().getFullYear().toString() ,
    value: 'ss_'+ new Date().getFullYear().toString(),
  },
  { type: 'divider' },
  { type: 'subheader', title: 'Hochschulweite Kurse' },
  {
    title: 'Stundenplanung',
    value: 'stundenplanung',

  },
  {
    title: 'Prüfungsplanung',
    value: 'pruefungsplanung',
  },
]

//Hole den Questflow.
const flow = questFlow.getQuestFlow();
</script>

<template>
  <v-container class="bg-white ">
    <v-row class="fill-height">
      <v-col cols="2" class="d-flex align-start pa-0">
        <Logo/>
      </v-col>
      <v-col cols="10" class="pa-0">
        <PageTitleCard :title="route.path"/>
      </v-col>
    </v-row >
    <v-row class="d-flex justify-end">
      <v-col cols="6" class="d-flex pa-0 ">
        <Stundenplanung v-if="selected.selected?.[0] === 'stundenplanung'" class="w-100 text-center"/>
      </v-col>
      <v-col cols="4" class="pa-0 " >
        <SideMenuList :listItems="listItems"  ref="selected"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>