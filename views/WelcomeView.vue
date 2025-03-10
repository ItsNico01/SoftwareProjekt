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
  <div class="container">
    <!-- Name wird an den Header weitergegeben-->
    <WelcomeHeader :name="refRegisterForm.RegisterFormFirstName"/>
    <Avatar :css="'welcomeView'" ref="refAvatar"/>
    <RegisterForm :avatarSrc="refAvatar.avatar"  ref="refRegisterForm" />
  </div>

</template>

<style scoped>
.container {
  width: 50vw;
  height: 86vh;
  border-radius: 2vw;
  margin-inline: auto;
  margin-top: 1vh;
  background-color: #cdcdcd;
  padding: 3vw;
}

</style>