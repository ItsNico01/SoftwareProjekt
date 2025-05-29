<script setup>
import questFlow from "@/quests/QuestFlow.js";
import {Quest} from "@/quests/Quest.js";
import {computed, reactive, ref} from "vue";
import {QuestState} from "@/quests/QuestState.js";

//Die Aufgaben
const quest1 = reactive(new Quest("Finde deinen Stundenplan"));
const quest2 = reactive(new Quest("Melde dich zu einer Prüfung an"));


//Der Aufgabenfluss
const flow = questFlow.getQuestFlow();
flow.enqueueQuests(quest1);
flow.enqueueQuests(quest2);

</script>

<template>
  <v-container>
    <v-row >
      <v-col >
        <v-card class="bg-red-lighten-2"  min-height="10vw bg-red-lighten-2">
          <v-card-title v-if="!flow.isEmpty()">{{flow.getActiveQuest().getName()}}</v-card-title>
          <v-card-title v-else>Du hast alle Aufgaben gelöst! </v-card-title>
          <v-card-text>

            <v-list-item v-if="!flow.isEmpty()"
                v-for="(item, i) in flow.getActiveQuest().getSteps()"
                :key="i"
                :value="item"
                :class="{done: item.state === QuestState.DONE}"
            >{{item.name}}</v-list-item>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped>
.done{
  text-decoration: line-through;
}

</style>