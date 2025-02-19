<script setup>

</script>

<template>
  <form class="loginForm" >
    <div class="name">
      <label for="username">Username: </label>
      <input id="username" type="text" />
    </div>
    <div class="password">
      <label for="password">Password: </label>
      <input id="password" type="password" />
    </div>
    <button type="submit">
      Login
    </button>
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