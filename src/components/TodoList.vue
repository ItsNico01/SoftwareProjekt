<script setup>
import {questFlow} from "@/quests/QuestFlow.js";
import {Quest} from "@/quests/Quest.js";

//Die Aufgaben
const quest1 = new Quest("Finde deinen Stundenplan")
const quest2 = new Quest("Melde dich zu einer Prüfung an")


//Der Aufgabenfluss
const flow = questFlow.getQuestFlow();
flow.enqueue(quest1);
//questFlow.enqueue(quest2);


//flow.print();
flow.start()

const items = ["1", "2", "3"];
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Hallo</v-card-title>
          <v-card-text>
            <v-list :items="items"></v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped>
.list {
  width: 15vw;
  height: 21vw;
  background-color: #7e3535;
  margin-top: -20vw;
  margin-left: 4vw;

}

</style>