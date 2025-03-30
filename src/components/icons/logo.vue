<script setup>
//TODO:LoginView anpassen.
const logo = new URL('@/assets/hshl.png', import.meta.url).href;

</script>

<template>
<!--  <div class="logo">
    <img src="../../assets/hshl.png" alt="logo">
  </div>-->
  <v-img
      :width="10"
      :src= "logo"
  ></v-img>

</template>

<style scoped>

</style>