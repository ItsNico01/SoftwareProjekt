<script setup>
import {ref} from "vue";

const props = defineProps({
  name: ref
})
</script>

<template>
  <div class="header">
    <h1>Willkommen beim HSHL-Trainer!</h1>
  </div>
  <div>
    <p class="welcomeText">Hallo {{ props.name }}, wir freuen uns, dich als neue(n) Student/in bei uns begrüßen zu können! <br>
      Mit Hilfe des HSHL-Trainers werden dir wichtige Abläufe beigebracht, welche dir den Start ins Studium erleichtern.<br><br>
      Bitte melde dich zunächst an.
    </p>
  </div>


</template>

<style scoped>
.header {
  text-align: center;
  margin-inline: auto;
  margin-bottom: 2vw;
  overflow: auto;
  background-color: #ffffff;
  border-radius: 2vw;
}


.welcomeText {
  text-align: center;
}

</style>