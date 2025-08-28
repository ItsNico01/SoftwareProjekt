import {reactive} from "vue";
import userStore from "@/user/userStore.js";
import UserStore from "@/user/userStore.js";


class QuestFlow {
    #quests = reactive([]);
    constructor() {
    }

    //Quests in QuestFlow einfügen
    enqueueQuests(element){
        this.#quests.push(element);
    }



    //Falls Items im Queueu und nicht leer -> Das 1. löschen und Levelaufstieg
    dequeueQuests() {

        if(this.getActiveQuest().allStepsCompleted() && !this.isEmpty()){
            this.getActiveQuest().complete();
            this.#quests.shift();
            UserStore.updateLevel();

        }

    }

    //Das vorderste Item anzeigen
    getActiveQuest(){
        if(!this.isEmpty()){
            return this.#quests[0]
        }
    }



    isEmpty() {
        return this.#quests.length === 0;
    }

    size() {
        return this.#quests.length;
    }

    print() {
        for (let i = 0; i < this.#quests.length; i++) {
            console.log(this.#quests[i])
        }
    }

    startConfig(){

            //Aktuelle Quest holen
            const activeQuest = this.getActiveQuest();

            //Aktuelle Quest aktivieren.
            activeQuest.start();
            //Unteraufgabe vorbereiten.
            activeQuest.stepInProgress();


    }

    //Prüfen, ob der Schritt erledigt wurde.
    stepCompleted(stepName){
        if(!this.isEmpty()){
            this.startConfig();

            //Unteraufgabe der aktuellen Quest
            const stepInProgress = this.getActiveQuest().getStepInProgress();


            //Schritt erledigt? Setze ihn als erledigt und setze den nächsten auf "in Progress"
            if (stepInProgress?.getName() === stepName) {
                stepInProgress.complete();
                this.getActiveQuest().stepInProgress();
            }

            //Wenn alle Unteraufgaben erledigt sind: Quest entfernen
            this.dequeueQuests();

        }

    }

    getQuestFlow() {
        return this;
    }
}

//QuestFlow, der im gesamten Programm genutzt wird.
const questFlow = new QuestFlow();
export default questFlow;