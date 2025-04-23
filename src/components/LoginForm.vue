<script setup>

import router from "../../router/router.js";
import {userStore} from "@/user/userStore.js";
import {useRoute} from "vue-router";

//Hole aktuellen User.
const user = userStore.getUser();

//Aktuelle Route
const route = useRoute();

//Checken, ob man im normalen Login oder beim Login des COO ist.
//Je nachdem wird man zu einem anderen path weitergeleitet
let submitDirection = () => {
  if(route.path=== "/login") {
    router.push('/myHSHL')
  }else if(route.path === "/campusOfficeLogin") {
    router.push('/campusOffice');
  }
}


</script>

<template>
  <form @submit.prevent="submitDirection" class="loginForm">
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