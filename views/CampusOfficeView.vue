<script setup>
import Stundenplanung from "@/components/Stundenplanung.vue";
import Logo from "@/components/icons/logo.vue";
import SideMenuList from "@/components/SideMenuList.vue";
import PageTitleCard from "@/components/PageTitleCard.vue";
import {onMounted, ref} from "vue";
import ExamRegistration from "@/components/ExamRegistration.vue";
import {Major} from "@/majors/major.js";
import userStore from "@/user/userStore.js";
import questFlow from "@/quests/QuestFlow.js";


//User aus dem LocalStorage holen
const user = userStore.getUser();



//Studiengänge erstellen
const major = new Major(user.getMajor);


//Ausgewählter Menüpunkt
const selected = ref([""]);

//SideMenuList Items
// Value == Title, da ich die Values in einer Funktion als Titel benutze.
const listItems = [
  { type: 'subheader', title: 'Allgemeiner Zugriff' },
  {
    title: 'Anmeldung zu den Modulprüfungen',
    value: 'Anmeldung zu den Modulprüfungen',
  },
  { type: 'divider' },
  { type: 'subheader', title: 'Mein Studienkonto' },
  {
    title: 'Meine Studiennachweise',
    value: 'Meine Studiennachweise',
  },
  {
    title: 'Personendaten bearbeiten',
    value: 'Personendaten bearbeiten',
  },
  {
    title: 'Meine Anmeldungen',
    value: 'Meine Anmeldungen',
  },
  {
    title: 'Studienverlauf',
    value: 'Studienverlauf',
  },
  {
    title: 'Leistungsnachweis',
    value: 'Leistungsnachweis',
  },
]

//Hole den Questflow.
const flow = questFlow.getQuestFlow();

onMounted(() => {
  flow.stepCompleted("Gehe auf Campus Office Online");
})


</script>

<template>

<!--    <v-container class="fill-height pa-0 bg-white">
      <v-row no-gutters >
        <v-col class=" d-flex align-start h-auto" cols="4">
        <Logo/>
        </v-col>
        <v-col class="h-25 " cols="8">
          <v-card class="pa-5" title="Campus Office Online" text="Das Serviceportal der Hochschule Hamm-Lippstadt">
          </v-card>
        </v-col>
        <v-col class="d-flex h-75 fill-height" cols="2">
          <SideMenuList :listItems="listItems" class="w-100" ref="selected"/>
        </v-col>
        <v-col cols="10"  >
          <PageTitleCard :title="selected.selected?.[0]"/>

          &lt;!&ndash; Innerhalb Div: Content&ndash;&gt;
          <div class=" w-100 d-flex justify-center ma-1">
            <ExamRegistration :major="major" v-if="selected.selected?.[0] === 'Anmeldung zu den Modulprüfungen'" class="w-100 text-center" />
          </div>
        </v-col>

      </v-row>
    </v-container>-->

<!--  <v-container class="bg-white">
    <v-row>
      <v-col cols="2" class="d-flex align-start pa-0">
        <Logo/>
      </v-col>
      <v-col cols="10" class="pa-0">
          <v-card class="pa-2" title="Campus Office Online" text="Das Serviceportal der Hochschule Hamm-Lippstadt">
          </v-card>
      </v-col>
    </v-row>
    <v-row class="h-25">
      <v-col cols="4" class="d-flex h-25 pa-0">
        <SideMenuList :listItems="listItems"  ref="selected"/>
      </v-col>
&lt;!&ndash;      <v-col cols="8" class="pa-0">
&lt;!&ndash;        <PageTitleCard :title="selected.selected?.[0]"/>
        <ExamRegistration :major="major" v-if="selected.selected?.[0] === 'Anmeldung zu den Modulprüfungen'" class="w-100 text-center" />&ndash;&gt;
      </v-col>&ndash;&gt;
    </v-row>
  </v-container>-->

  <v-container class="bg-white">
    <v-row>
      <v-col cols="2" class="d-flex align-start pa-0">
        <Logo/>
      </v-col>
      <v-col cols="10" class="pa-0">
        <v-card class="pa-2" title="Campus Office Online" text="Das Serviceportal der Hochschule Hamm-Lippstadt">
        </v-card>
      </v-col>
    </v-row>
    <v-row class="fill-height">
      <v-col cols="4" class="pa-0">
        <SideMenuList :listItems="listItems"  ref="selected"/>
      </v-col>
      <v-col cols="8" >
        <PageTitleCard :title="selected.selected?.[0]"/>
        <ExamRegistration :major="major" v-if="selected.selected?.[0] === 'Anmeldung zu den Modulprüfungen'" class="exam text-center" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

.exam {
  max-height: 50%;
  padding: 0;
  margin: 0;
}
</style>