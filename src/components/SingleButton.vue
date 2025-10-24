<!-- Component für alle alleinstehenden Buttons.
     Wird aktuell nicht verwendet.-->
<script setup>
  import {useRouter} from "vue-router";

  const router = useRouter()

  const props = defineProps({
    path: String,
    css: String
})

//Je nach dem, auf welcher URL man sich befindet, leitet der Button auf eine andere Seite weiter
function changePage(){
    switch(props.path){
      //router.go(-1) : Eine Seite zurück im History-Stack.
      case ("/login"): router.go(-1); break;
      case ("/"): alert("Noch nicht angelegt"); break;
      default: alert("Noch nicht angelegt!");
    }
}
</script>

<template>
  <!-- class: Aussehen des Buttons wird geändert,
       je nach dem welcher Prop (css) von Elterncomponent übergeben wird-->
  <div @click="changePage" :class="props.css">{{path}}</div>

</template>

<style scoped>

.offButton {
  min-width: 2vw;
  min-height: 2vw;
  margin-inline: 95%;
  margin-top: 8vw;
  background-color: aqua;
  overflow: hidden
}

.backButton {
  width: 2vw;
  height: 2vw;
  margin: 2vw;
  background-color: aqua;
}

</style>