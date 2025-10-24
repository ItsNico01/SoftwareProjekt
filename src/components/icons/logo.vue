<script setup>
//Das HSHL-Logo
const logo = new URL('@/assets/hshl.png', import.meta.url).href;
</script>

<template>
  <v-img
      :width="10"
      :src= "logo"
  ></v-img>
</template>

<style scoped>

</style>