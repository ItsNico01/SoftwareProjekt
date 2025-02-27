<script setup>
import {provide, ref} from "vue";

//RegisterForm Eingaben
const RegisterFormFirstName = ref("");
const RegisterFormMajor = ref("");
const RegisterFormDifficulty = ref("");


//RegisterFormFirstName in WelcomeHeader (Parent) erreichbar machen.
defineExpose({RegisterFormFirstName});

function hello() {
  alert(`Name: ${RegisterFormFirstName.value},
        Major: ${RegisterFormMajor.value},
        Difficulty: ${RegisterFormDifficulty.value}`);
}

</script>

<template>
  <form @submit="hello">
    <fieldset>
      <legend>Name und Studiengang: </legend><br>
        <input v-model="RegisterFormFirstName" type="text" placeholder="Vorname" required><br>

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