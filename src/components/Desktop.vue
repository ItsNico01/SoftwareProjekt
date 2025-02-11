<script setup>
import Avatar from "@/components/Avatar.vue";
import LevelBar from "@/components/LevelBar.vue";
import ButtonGrid from "@/components/ButtonGrid.vue";
import OffButton from "@/components/OffButton.vue";
import TodoList from "@/components/TodoList.vue";
</script>

<template>
  <div class="window">
    <Avatar/>
    <LevelBar/>
    <ButtonGrid/>
    <OffButton/>
  </div>
  <div class="standVertical"></div>
  <div class="standHorizontal"></div>
  <TodoList/>
</template>

<style scoped>
.window {
    width: 90%;
    height: 40vw;
    border: 1vw solid black;
    margin-top: 2vw;
    margin-inline: auto;
}
.standVertical {
  width: 5%;
  border-top: 1vw solid;
  background-color: black;
  margin-inline: auto;
  height: 2vw;
}
.standHorizontal {
  width: 90%;
  border-top: 1vw solid black;
  margin-inline: auto;

}

</style>