<script setup>
import Logo from "@/components/icons/logo.vue";
import LoginForm from "@/components/LoginForm.vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute();

</script>

<template>
  <v-container class="pa-0">
    <v-row no-gutters class="">
      <v-col class="d-flex align-start" cols="4"  >
        <Logo/>
      </v-col>
      <v-col cols="12">
        <LoginForm/>
      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped>

</style>