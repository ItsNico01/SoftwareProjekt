<script setup>
import { useRouter } from 'vue-router'
import {getCurrentInstance} from "vue";
const router = useRouter()

const props = defineProps( {
  buttonItems: Object,
})

</script>

<template>
  <!-- Übergebene Items werden hier als gridItems angezeigt.
       Klickt man auf ein Items, so wird man auf den jeweiligen übergebenen Link weitergeleitet.-->
  <div class="container" >
    <div v-for="(item, index) in buttonItems"
         :key="item"
         :class="props.buttonItems[index].style"
         @click="router.push(props.buttonItems[index].route)">{{props.buttonItems[index].name}}</div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.home {
  background-color: aqua;
  height: 5vw;
  width: 5vw;
  border: 1vh solid black;
  margin-top: 2vw;
  margin-inline: 1vw;
  text-align: center;
  vertical-align: middle;
  line-height: 5vw;
}

.myHSHL {
  background-color: green;
  height: 5vw;
  width: 5vw;
  border: 1vh solid black;
  margin-top: 2vw;
  margin-inline: 1vw;
  flex-grow: 2;
  text-align: center;
  vertical-align: middle;
  line-height: 5vw;
}

</style>