<script setup>
import {acronymToFullMajor} from "@/helpers/acronymToFullMajor.js";
import {ref} from "vue";
import {userStore} from "@/user/userStore.js";

const props = defineProps( {
  major: Object,

})

//User aus dem LocalStorage holen
const user = userStore.getUser();

//Menu Items Studiengang
const items = [acronymToFullMajor.get(props.major.getName)]

//Menu Items Kurse
const courseItems = (props.major.getCoursesOf(props.major.getName))


const selected = ref('');

//Prüfungsanmeldung
function handleRegistration(item){
  if(!user.getRegisteredCourses.includes(item)){
    userStore.updateRegisteredCourses(item);
  }
  console.log(item);
  console.log(user.getRegisteredCourses)
  alert("angemeldet");
}


</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-select
            :items="items"
            density="compact"
            label="Studiengang"
            v-model="selected"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="selected">
        <v-card title="Kurse" class="fill-height">
          <v-list-item v-for="(item, i) in courseItems" :key="i">
              <v-list-item-title v-text="item"></v-list-item-title>
              <v-btn @click="handleRegistration(item)">
                Anmelden
              </v-btn>
          </v-list-item>




        </v-card>
      </v-col>
    </v-row>
  </v-container>





</template>

<style scoped>

</style>