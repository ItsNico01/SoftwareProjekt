<script setup>
import {ref} from "vue";
import userStore  from "@/user/userStore.js";
import router from "../../router/router.js";

const props = defineProps( {
  avatarSrc: String
})
//RegisterForm Eingaben
const RegisterFormFirstName = ref("");
const RegisterFormMajor = ref("");
const RegisterFormDifficulty = ref("");
const formRef = ref(null);

//RegisterFormFirstName in WelcomeHeader (Parent) erreichbar machen.
defineExpose({RegisterFormFirstName});

/*Wird verwendet, damit die route erste geändert wird, wenn der User erstellt wurde.
  Fügt man userStore; router.push('/home') direkt in @submit.prevent ein, wird der User
  nicht richtig erstellt.
  Required-Felder gehen in Vuetiy nur mit rules, die man anschließend validier.
  Das Result muss asynchron sein*/
async function handleCreateUser() {
  const result = await formRef.value?.validate()
  if (result.valid) {
    userStore.createUser(props.avatarSrc)
    router.push('/home')
  }
}
</script>

<template>
  <v-sheet class="pa-4">
    <v-form @submit.prevent="handleCreateUser(props.avatarSrc)" ref="formRef"  method="POST">

      <v-text-field
          v-model="RegisterFormFirstName"
          id="firstName"
          label="Name"
          variant="solo-filled"
          class="w-100"
          :rules="[() => RegisterFormFirstName.length > 0 || 'Required field']"
      >
      </v-text-field>

      <v-select
          class="w-100"
          clearable
          label="Wähle deinen Studiengang"
          v-model="RegisterFormMajor"
          id="major"
          :items = "[{title:'AIS',value:'ais'},{title:'CVD',value:'cvd'}]"
          variant="solo"
          :rules="[() => RegisterFormMajor.length > 0 || 'Required field']"
      ></v-select>

      <v-select
          class="w-100"
          clearable
          label="Wähle die Schwierigkeit:"
          v-model="RegisterFormDifficulty"
          id="difficulty"
          :items = "[{title:'Normal',value:'normal'},{title:'Schwer',value:'hard'}]"
          variant="solo"
          :rules="[() => RegisterFormDifficulty.length > 0 || 'Required field']"
      ></v-select>
      <v-btn
          type="submit">
        Starten
      </v-btn>
    </v-form>
  </v-sheet>


</template>

<style scoped>

</style>