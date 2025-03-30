<script setup>
import Logo from "@/components/icons/logo.vue";
import CourseList from "@/components/CourseList.vue";
import {userStore} from "@/user/userStore.js";
import PageTitleCard from "@/components/PageTitleCard.vue";

//User aus dem LocalStorage holen
const user = userStore.getUser();
</script>

<template>

  <v-container class="fill-height pa-0">
    <v-row no-gutters class=" fill-height">
      <v-col class="d-flex align-start" cols="3">
        <Logo/>
      </v-col>
      <v-col cols="10" >
        <PageTitleCard/>
      </v-col>

      <v-col class="d-flex h-75 justify-end" cols="2">
        <CourseList :major= "user.getMajor" class="w-100"/>
      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped>

</style>