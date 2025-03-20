<script setup>
//import {user} from "@/user/userStore.js"
import {computed, ref} from "vue";

const images = ref(
    [
      {alt: "avatar1", src: new URL(`../assets/anonymous_avatars_1.jpg`, import.meta.url).href},
      {alt: "avatar2", src: new URL(`../assets/anonymous_avatars_2.jpg`, import.meta.url).href},
      {alt: "avatar3", src: new URL(`../assets/anonymous_avatars_3.jpg`, import.meta.url).href},
      {alt: "avatar4", src: new URL(`../assets/anonymous_avatars_4.jpg`, import.meta.url).href},
    ]
)


</script>

<template>
  <div class="openbox">
    <div class="content" >
      <!--Avatare durchlaufen -->
      <div v-for="avatar in images" :key="avatar.src">
        <img :src="avatar.src" :alt="avatar.alt" @click="$emit('avatarClicked', avatar.src)">
      </div>
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