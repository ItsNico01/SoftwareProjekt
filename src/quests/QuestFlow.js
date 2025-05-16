export class QuestFlow {
    #quests = [];
    constructor() {
    }

    //Quests in QuestFlow einfügen
    enqueue(element){
        this.#quests.push(element);
    }

    //Falls Items im Queueu -> Das 1. löschen
    dequeue() {
        return this.isEmpty ? "QuestFlow is empty" : this.#quests.shift()
    }

    //Das vorderste Item anzeigen
    peek(){
        return this.isEmpty() ? "Queue is empty" : this.#quests[0];
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

    //Prüfen, ob der Schritt erledigt wurde.
    //Wenn ja: Schritt als erledigt markieren + den neuen Schritt aktivieren.
    stepCompleted(stepName){
        const stepInProgress = this.peek().getStepInProgress();

        if (stepInProgress.getName() === stepName) {
            console.log("erledigt")
            stepInProgress.complete();
            this.peek().stepInProgress();
        }
        console.log(this.peek());
    }

    start(){
        //Starte 1. Quest
        const firstQuest= this.peek();
        firstQuest.start();

        firstQuest.stepInProgress();

        this.print();
    }


    getQuestFlow() {
        return this;
    }
}

//QuestFlow, der im gesamten Programm genutzt wird.
export const questFlow = new QuestFlow();