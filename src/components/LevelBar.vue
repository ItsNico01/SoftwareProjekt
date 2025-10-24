<script setup>
const props = defineProps( {
  userLevel: String
})
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="4"></v-col>
      <v-col class="justify-center align-content-center" >
        <v-card-text class="text-center">Level {{props.userLevel}}</v-card-text>
        <!--Der Balken ist voll, sobald der Spieler Level 3 Erreicht hat (-> Spiel abgeschlossen.). -->
        <v-progress-linear  :model-value="props.userLevel * 33.33" :height="10" rounded></v-progress-linear>
      </v-col>
      <v-col cols="4"></v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>