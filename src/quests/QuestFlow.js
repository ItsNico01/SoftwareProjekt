class QuestFlow {
    #quests = [];
    constructor() {
    }

    //Quests in QuestFlow einfügen
    enqueueQuests(element){
        this.#quests.push(element);
    }



    //Falls Items im Queueu und nicht leer -> Das 1. löschen
    dequeueQuests() {

        if(this.getActiveQuest().allStepsCompleted() && !this.isEmpty()){
            this.getActiveQuest().complete();
            this.#quests.shift();

        }

    }

    //Das vorderste Item anzeigen
    getActiveQuest(){
        return this.isEmpty() ? "QuestFlow is empty" : this.#quests[0];
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



        console.log(this.#quests)

    }

    getQuestFlow() {
        return this;
    }
}

//QuestFlow, der im gesamten Programm genutzt wird.
export const questFlow = new QuestFlow();