<script setup>
import LoginForm from "@/components/LoginForm.vue";
import Logo from "@/components/icons/logo.vue";
</script>

<template>
  <v-container class="pa-0 bg-white fill-height">
    <v-row no-gutters>
      <v-col class=" d-flex align-start" cols="4">
        <Logo/>
      </v-col>
      <v-col  cols="8"  >
        <v-card  title="Campus Office Online" text="Das Serviceportal der Hochschule Hamm-Lippstadt">
        </v-card>
      </v-col>
      <v-col cols="12">
        <LoginForm/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>