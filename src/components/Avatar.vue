<script setup>
import {computed, onMounted, ref} from "vue";
import AvatarSelection from "@/components/AvatarSelection.vue";
import {user} from "@/user/createUser.js";

//css: css-Klasse
//src: Src des Avatar-Bildes.
const props = defineProps({
  css: String,
  src: {
    type: String,
    default: "",
  },
})

const avatarBoxVisible = ref(false);
let avatar = ref("")

//Wird beim mounten aufgerufen.
//So wird der aktuelle Avatar benutzt.
function setUp() {
  avatar.value = props.src;
}

//Avatarbox anzeigen oder verstecken
function toggleAvatarBox() {
  avatarBoxVisible.value = !avatarBoxVisible.value;
}

//Im Event ausgewählter Avatar wird als aktueller Avatar gesetzt.
//Für globalen user und lokalen avatar.
function handleAvatarChange(selected) {
  toggleAvatarBox()
  avatar.value = selected;
  user.setAvatar = selected
}

onMounted(() => {
  setUp();
})

</script>

<template>

  <img  :src="avatar" :class="props.css" @click="handleAvatarChange($event)">
    <p class="hide">Bearbeiten</p>
  <!-- Wenn avatarBoxVisible true, wird die Komponente angezeigt-->
  <Transition>
    <AvatarSelection v-if="avatarBoxVisible" @avatarClicked="handleAvatarChange($event)" />
  </Transition>

</template>

<style scoped>
.home {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 10vw;
  height: 10vw;
  border: 1vw solid black;
  border-radius: 50%;
  margin-top: 2vw;
}
.welcomeView {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 8vw;
  height: 8vw;
  border: 0.1vw solid black;
  border-radius: 50%;
  background-color: aqua;

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