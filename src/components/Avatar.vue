<script setup>
import {onMounted, ref} from "vue";
import AvatarSelection from "@/components/AvatarSelection.vue";
import userStore from "@/user/userStore.js";
import SvgIcon from '@jamescoyle/vue-icon';
import {mdiPencil} from "@mdi/js";

//User aus dem LocalStorage holen
const user = userStore.getUser();

//css: css-Klasse
//src: Src des Avatar-Bildes.
const props = defineProps({
  size: String,
  src: {
    type: String,
    default: "",
  },
})

const avatarBoxVisible = ref(false);
let avatar = ref("")
const avatarVersion = ref(0);

defineExpose({avatar});

//Wird beim mounten aufgerufen.
//So wird der aktuelle Avatar benutzt.
function setUp() {
  avatar.value = props.src;
  console.log(props.src);
}

//avatarVersion hochzählen, damit das Nachladen des Bilds schneller geht.
function refreshAvatar() {
  avatarVersion.value++;
}

//Avatarbox anzeigen oder verstecken
function toggleAvatarBox() {
  avatarBoxVisible.value = !avatarBoxVisible.value;
}

//Im Event ausgewählter Avatar wird als aktueller Avatar gesetzt.
//Für globalen User und lokalen Avatar.
function handleAvatarChange(selected) {
  toggleAvatarBox();
  avatar.value = selected;
  userStore.updateAvatar(selected);
  refreshAvatar();
}

onMounted(() => {
  setUp();
})


</script>

<template>
  <v-container>
    <v-row class="d-flex justify-center align-center pb-8 ">
      <v-hover v-slot="{ isHovering, props }">
        <v-avatar
            v-bind="props"
            :size="size"
            color="surface-variant"
            class="relative overflow-hidden cursor-pointer border-thin"
            @click="toggleAvatarBox"
        >
          <!-- Das Bild (WelcomeView)-->
          <v-img v-if="!user?.getAvatar"
              :src="avatar"
              cover
              class="absolute inset-0 w-full h-full"
              alt="Avatar"
          />

          <!-- Das Bild -->
          <v-img v-else
                 :src="`${user.getAvatar}?v=${avatarVersion}`"
                 cover
                 class="absolute inset-0 w-full h-full"
                 alt="Avatar"
          />

          <!-- Hover-Icon -->
          <svg-icon
              v-show="isHovering"
              type="mdi"
              :path="mdiPencil"
              class="absolute inset-0 flex items-center justify-center z-10 text-white bg-black/40 rounded-full pointer-events-none"
          />
        </v-avatar>
      </v-hover>

    </v-row>

    <v-row class="d-flex justify-center align-center">
      <!-- Wenn avatarBoxVisible true, wird die Komponente angezeigt-->
      <Transition >
        <AvatarSelection v-if="avatarBoxVisible" @avatarClicked="handleAvatarChange($event)" />
      </Transition>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-avatar {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.v-avatar .v-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.v-avatar .svg-icon {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  pointer-events: none;
}
</style>