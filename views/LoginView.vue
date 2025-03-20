<script setup>

import Logo from "@/components/icons/logo.vue";
import LoginForm from "@/components/LoginForm.vue";
import SingleButton from "@/components/SingleButton.vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute();
const style = "backButton";

</script>

<template>
  <SingleButton :path="route.path" :css="style"/>
  <Logo/>
  <LoginForm/>

</template>

<style scoped>

</style>