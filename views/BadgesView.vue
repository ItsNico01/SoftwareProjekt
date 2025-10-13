<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import {badgesData} from "@/components/Badges/BadgesData.js";
import {QuestState} from "@/quests/QuestState.js";

</script>

<template>
  <v-container class="d-flex fill-height align-start bg-white">
    <v-row>
      <v-col>
        <v-card>
          <v-list>
            <v-list-item
                v-for="(item, i) in badgesData"
                :key="i"
                :value="item"
                :class="{notArchived: !item.finished}"
                >
              <template v-slot:prepend>
                <svg-icon type="mdi" :path= "item.icon"></svg-icon>
              </template>

              <v-list-item-title class="ma-4" v-text="item.name"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.notArchived{
  color: rgb(0,0,0,0.5);
}
</style>