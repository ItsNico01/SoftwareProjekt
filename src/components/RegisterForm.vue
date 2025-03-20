<script setup>
import {computed, provide, ref} from "vue";
import { userStore } from "@/user/userStore.js";
import router from "../../router/router.js";



const props = defineProps( {
  avatarSrc: String
})
//RegisterForm Eingaben
const RegisterFormFirstName = ref("");
const RegisterFormMajor = ref("");
const RegisterFormDifficulty = ref("");


//RegisterFormFirstName in WelcomeHeader (Parent) erreichbar machen.
defineExpose({RegisterFormFirstName});

/*Wird verwendet, damit die route erste geändert wird, wenn der User erstellt wurde.
  Fügt man userStore; router.push('/home') direkt in @submit.prevent ein, wird der User
  nicht richtig erstellt.*/
function handleCreateUser() {
  userStore.createUser(props.avatarSrc);
  router.push('/home');

}






</script>

<template>
  <form @submit.prevent="handleCreateUser(props.avatarSrc)"  method="POST">
    <fieldset>
      <legend>Name und Studiengang: </legend><br>
        <input v-model="RegisterFormFirstName" type="text" id="firstName" placeholder="Vorname" required><br>

      <select v-model="RegisterFormMajor" id="major" name="major" required>
        <option disabled value="">Wähle deinen Studiengang</option>
        <option :value="'ais'">AIS</option>
        <option :value="'cvd'">CVD</option>
      </select>
    </fieldset>

    <fieldset>
      <legend>Wähle die Schwierigkeit:</legend><br>

      <select v-model="RegisterFormDifficulty" id="difficulty" name="difficulty" required>
        <option disabled value="">Schwierigkeit</option>
        <option :value="'normal'">Normal</option>
        <option :value="'hard'">Schwer</option>
      </select>
    </fieldset>

    <button type="submit" >Starten</button>
  </form>




</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

fieldset {
  margin: 1vw;
  padding: 0;
  border: 2px solid #808080;
  width: 10vw;
}

legend {;
  float: left;
  background-color: #808080;
  padding: 0.2vw 1.5vw;
  border-bottom-right-radius: 1vw;
}

input {
  margin: 0.2vw;
}

select {
  margin: 0.2vw;
}

button {
  width: 10vw;
}

</style>