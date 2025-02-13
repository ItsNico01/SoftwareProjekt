<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

  function goToLogin() {
    router.push('/login');
  }

</script>

<template>
  <div class="container">
    <div @click="goToLogin" class="gridItems">myHshl</div>
    <div class="gridItems" > Badges</div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.gridItems {
  background-color: aqua;
  height: 5vw;
  width: 5vw;
  border: 1vh solid black;
  margin-top: 2vw;
  margin-inline: 1vw;
}

</style>