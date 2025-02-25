<script setup>
import {ref} from "vue";
import AvatarSelection from "@/components/AvatarSelection.vue";

const props = defineProps({
  css: String
})

let avatarBoxVisible = ref(false);

//Avatarbox anzeigen oder verstecken
function toggleAvatarBox() {
  avatarBoxVisible.value = !avatarBoxVisible.value;
  console.log(avatarBoxVisible.value)
}
</script>

<template>
  <div :class="props.css" @click="toggleAvatarBox">
    <p class="hide">Bearbeiten</p>
  </div>
  <!-- Wenn avatarBoxVisible true -> Komponente wird angezeigt-->
  <Transition>
    <AvatarSelection v-if="avatarBoxVisible" />
  </Transition>

</template>

<style scoped>
.desktopView {
  width: 10vw;
  height: 10vw;
  border: 1vw solid black;
  border-radius: 50%;
  background-color: aqua;
  margin-inline: auto;
  margin-top: 2vw;
}
.welcomeView {
  width: 8vw;
  height: 8vw;
  border: 0.1vw solid black;
  border-radius: 50%;
  background-color: aqua;
  margin-inline: auto;
  margin-top: 2vw;
  margin-bottom: 1vw;

}
.hide {
  display: none;
}
.welcomeView:hover .hide{
  display: block;
  color: white;
  height: 2vw;
  text-align: center;
}
.welcomeView:hover {
  background-color: grey;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>