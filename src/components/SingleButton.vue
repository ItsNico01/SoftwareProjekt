<!-- Componente für alle alleinstehenden Buttons-->
<script setup>
  import {useRouter} from "vue-router";
  import {onBeforeMount, onMounted} from "vue";

  const router = useRouter()

  const props = defineProps({
    path: String,
    css: String
})

//Je nach dem, auf welcher URL man sich befindet, leitet der Button auf eine andere Seite weiter
function changePage(){
    switch(props.path){
      case ("/login"): router.push("/"); break;
      case ("/"): alert("Noch nicht angelegt"); break;
      default: alert("Noch nicht angelegt!");
    }
}

//Aussehen des Buttons wird geändert, je nach dem welcher Prop (css) von Elterncomponente übergeben wird
function changeCSS() {
    switch (props.css) {
      case ("backButton"): document.getElementById("back-button").classList.add("backButton"); break;
      case ("offButton"): document.getElementById("back-button").classList.add("offButton");break;
      default: break;

    }
}

  onMounted(changeCSS);
</script>

<template>
  <div @click="changePage" id="back-button">{{path}}</div>

</template>

<style scoped>

.offButton {
  width: 2vw;
  height: 2vw;
  margin-inline: 95%;
  margin-top: 10vw;
  background-color: aqua;
}

.backButton {
  width: 2vw;
  height: 2vw;
  margin: 2vw;
  background-color: aqua;
}

</style>