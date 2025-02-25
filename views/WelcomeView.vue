<script setup>

import WelcomeHeader from "@/components/WelcomeHeader.vue";
import RegisterForm from "@/components/RegisterForm.vue";
import Avatar from "@/components/Avatar.vue";
</script>

<template>
  <div class="container">
    <WelcomeHeader/>
    <Avatar :css="'welcomeView'"/>
    <RegisterForm/>
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