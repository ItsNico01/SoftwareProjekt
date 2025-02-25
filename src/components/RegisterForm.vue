<script setup>

</script>

<template>
  <form>
    <fieldset>
      <legend>Angaben zu deiner Person: </legend><br>
        <input type="text" placeholder="Vorname" required><br>
        <input type="text" placeholder="Studiengang" required><br>
    </fieldset>

    <fieldset>
      <legend>Wähle die Schwierigkeit:</legend>

      <div>
        <input type="radio" id="normal" name="difficulty" value="normal" checked />
        <label for="normal">Normal</label>
      </div>

      <div>
        <input type="radio" id="hard" name="difficulty" value="hard" />
        <label for="hard">Schwer</label>
      </div>
    </fieldset>

    <button type="submit">Starten</button>
  </form>



</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

fieldset {
  margin: 0;
  padding: 0;
  border: 2px solid #808080;
}

legend {;
  float: left;

  background-color: #808080;
  padding: 0.2vw 1.5vw;
  border-bottom-right-radius: 1vw;
}





input {
  margin: 0.2vw;
}

</style>