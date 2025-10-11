<script setup>

const props = defineProps({
  name: String
})
</script>

<template>
<!--  <div class="header">
    <h1>Willkommen beim HSHL-Trainer!</h1>
  </div>
  <div>
    <p class="welcomeText">Hallo {{ props.name }}, wir freuen uns, dich als neue(n) Student/in bei uns begrüßen zu können! <br>
      Mit Hilfe des HSHL-Trainers werden dir wichtige Abläufe beigebracht, welche dir den Start ins Studium erleichtern.<br><br>
      Bitte melde dich zunächst an.
    </p>
  </div>-->



    <v-card-item >
      <v-card-title class="d-flex justify-center align-center font-weight-bold">Willkommen beim HSHL-Trainer!</v-card-title>

      <v-card-text class="welcomeText text-left">
        Hallo {{ props.name }}, wir freuen uns, dich als neue(n) Student/in bei uns begrüßen zu können! <br>
        Mit Hilfe des HSHL-Trainers werden dir wichtige Abläufe beigebracht, welche dir den Start ins Studium erleichtern.
      </v-card-text>
      <v-card-subtitle class="pl-4">Bitte melde dich zunächst an.</v-card-subtitle>
    </v-card-item>




</template>

<style scoped>

</style>