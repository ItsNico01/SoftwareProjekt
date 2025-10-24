<script setup>
import {ref} from "vue";

//Die möglichen Avatare
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
  <v-container>
    <v-row class="d-flex justify-center align-center">

      <!--Auswahlbox für die Avatare-->
      <v-card class="d-flex align-content-center pa-3 border-thin">
        <v-card-item v-for="avatar in images" :key="avatar.src">
          <img class="pa-0 ma-0" :src="avatar.src" :alt="avatar.alt" @click="$emit('avatarClicked', avatar.src);">
        </v-card-item>
      </v-card>

    </v-row>
  </v-container>
</template>

<style scoped>
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