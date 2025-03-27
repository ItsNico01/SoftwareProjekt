<script setup>
  function open(){
    document.getElementById("dropdownContent").classList.toggle("show")
  }


</script>

<template>
  <div class="dropdown">
    <p @click="open" class="dropdownHeading">Studiengang</p>
    <div id= "dropdownContent" class="dropdownContent">
      <a href="#">Link 1</a> <br>
      <a href="#">Link 2</a> <br>
      <a href="#">Link 3</a> <br>
    </div>
  </div>

</template>

<style scoped>
.dropdownHeading {
  cursor: pointer;
  background-color: aqua;
  height: 2vw;
}

.dropdownHeading:hover, .dropdownHeading:focus {
  background-color: #2980B9;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdownContent {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 2vw;
}

.dropdownContent a:hover {background-color: #ddd;}

.show {display:block;}

</style>