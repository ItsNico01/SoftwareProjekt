<script setup>

</script>

<template>
  <div class="openbox">
    <div class="content" @click="$emit('avatarClicked')">
      <img alt="avatar1"  src="../assets/anonymous_avatars_1.jpg">
      <img alt="avatar2"  src="../assets/anonymous_avatars_2.jpg">
      <img alt="avatar3"  src="../assets/anonymous_avatars_3.jpg">
      <img alt="avatar4"  src="../assets/anonymous_avatars_4.jpg">
    </div>
  </div>
</template>

<style scoped>
.openbox {
  width: 20vw;
  height: 8vw;
  margin-inline: auto;
  border: 0.2vw solid black;
  border-radius: 2%;
  background-color: white;
}

.content {
  width: 2vw;
  height: 2vw;
  margin-inline: auto;
  display:flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 5vw;
  height: 5vw;
  margin-top: 6vw;
}


img:hover {
  opacity: 0.8;
  cursor: pointer;
}


</style>