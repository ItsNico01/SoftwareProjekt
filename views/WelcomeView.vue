<script setup>
import {User} from "@/user/user.js";
import WelcomeHeader from "@/components/WelcomeHeader.vue";
import RegisterForm from "@/components/RegisterForm.vue";
import Avatar from "@/components/Avatar.vue";
import {ref} from "vue";

//Eingegebener Name aus dem WelcomeHeader.
const childRefRegisterFormFirstName = ref("");

//Lege leeren User an.
const user = new User();
user.setFirstName = childRefRegisterFormFirstName;



</script>

<template>
  <div class="container">
    <WelcomeHeader :name="childRefRegisterFormFirstName.RegisterFormFirstName"/>
    <Avatar :css="'welcomeView'"/>
    <!-- @: Erstelle User-->
    <RegisterForm  ref="childRefRegisterFormFirstName" />
  </div>

<p>{{user.setFirstName = childRefRegisterFormFirstName.RegisterFormFirstName}}</p>


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