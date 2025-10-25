<script setup>
import WelcomeHeader from "@/components/WelcomeHeader.vue";
import RegisterForm from "@/components/RegisterForm.vue";
import Avatar from "@/components/Avatar.vue";
import {ref} from "vue";

//Eingegebener Name aus dem WelcomeHeader.
const refRegisterForm = ref("");

const refAvatar = ref("");
</script>

<template>
  <v-container >
    <v-row class="d-flex justify-center align-center pa-3 bg-grey-lighten-2">
      <v-card >
        <WelcomeHeader :name="refRegisterForm.RegisterFormFirstName"/>
      </v-card>
    </v-row>
    <v-row class="bg-grey-lighten-2 d-flex justify-center align-center">
      <v-col cols="12" >
      <Avatar :size="'180'" ref="refAvatar"/>
      </v-col>
    </v-row>
    <v-row class="bg-grey-lighten-2 justify-center">
      <v-col cols="6" >
        <RegisterForm :avatarSrc="refAvatar.avatar"  ref="refRegisterForm" class="bg-grey-lighten-2"/>
      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped>
</style>