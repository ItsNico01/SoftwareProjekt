<script setup>

import router from "../../router/router.js";
import {userStore} from "@/user/userStore.js";

//Hole aktuellen User.
const user = userStore.getUser();

</script>

<template>
  <form @submit.prevent="router.push('/myHSHL')" class="loginForm">
    <div class="name">
      <label for="username">Username: </label>
      <input v-model="user.getFirstName" id="username" type="text"  disabled/>
    </div>
    <div class="password">
      <label for="password">Password: </label>
      <input id="password" type="password" value="*****" disabled/>
    </div>
    <button type="submit">Login</button>
  </form>
</template>

<style scoped>
.loginForm {
  height: 20vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1vw 2vw;
}
button {
  width: 10vw;
}

</style>