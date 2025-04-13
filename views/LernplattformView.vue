<script setup>
import Logo from "@/components/icons/logo.vue";
import CourseList from "@/components/CourseList.vue";
import {userStore} from "@/user/userStore.js";
import PageTitleCard from "@/components/PageTitleCard.vue";
import Stundenplanung from "@/components/Stundenplanung.vue";
import {ref} from "vue";

//User aus dem LocalStorage holen
const user = userStore.getUser();

const selected = ref("");
</script>

<template>

  <v-container class="fill-height pa-0">
    <v-row no-gutters class="fill-height">
      <v-col class="d-flex align-start" cols="3">
        <Logo/>
      </v-col>
      <v-col cols="10"  >
        <PageTitleCard/>

        <!-- Innerhalb Div: Content-->
        <div class=" w-100 d-flex justify-center ma-1">
          <Stundenplanung v-if="selected.selected?.[0] === 'stundenplanung'" class="w-100 text-center" />
        </div>
      </v-col>


      <v-col class="d-flex h-75 justify-end fill-height " cols="2">
        <CourseList :major= "user.getMajor" class="w-100" ref="selected"/>
      </v-col>

    </v-row>






  </v-container>

</template>

<style scoped>

</style>