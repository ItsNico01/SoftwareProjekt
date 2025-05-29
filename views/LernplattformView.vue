<script setup>
import Logo from "@/components/icons/logo.vue";
import SideMenuList from "@/components/SideMenuList.vue";
import {userStore} from "@/user/userStore.js";
import PageTitleCard from "@/components/PageTitleCard.vue";
import Stundenplanung from "@/components/Stundenplanung.vue";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {questFlow} from "@/quests/QuestFlow.js";

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

  <v-container class="fill-height pa-0">
    <v-row no-gutters class="fill-height">
      <v-col class="d-flex align-start" cols="3">
        <Logo/>
      </v-col>
      <v-col cols="10"  >
        <PageTitleCard :title="route.path"/>

        <!-- Innerhalb Div: Content-->
        <div class=" w-100 d-flex justify-center ma-1">
          <Stundenplanung v-if="selected.selected?.[0] === 'stundenplanung'" class="w-100 text-center"/>
        </div>
      </v-col>


      <v-col class="d-flex h-75 justify-end fill-height " cols="2">
        <SideMenuList :listItems="listItems" class="w-100" ref="selected"/>
      </v-col>

    </v-row>
  </v-container>

</template>

<style scoped>

</style>