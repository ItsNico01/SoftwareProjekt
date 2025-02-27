<script setup>
import {ref} from "vue";
import {User} from "@/user/user.js"
const RegisterFormFirstName = ref("");
//RegisterFormFirstName in WelcomeHeader (Parent) erreichbar machen.
defineExpose({RegisterFormFirstName});

/*const user = new User();
user.setFirstName = RegisterFormFirstName;*/
</script>

<template>
  <form>
    <fieldset>
      <legend>Name und Studiengang: </legend><br>
        <input v-model="RegisterFormFirstName" type="text" placeholder="Vorname" required><br>

      <select id="major" name="major">
        <option value="AIS">AIS</option>
        <option value="CVD">CVD</option>
      </select>
    </fieldset>

    <fieldset>
      <legend>Wähle die Schwierigkeit:</legend><br>

      <select id="difficulty" name="difficulty">
        <option value="normal">Normal</option>
        <option value="hard">Schwer</option>
      </select>
    </fieldset>

    <button type="submit">Starten</button>
  </form>

<!--  <p>{{user.getFirstName}}</p>-->


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