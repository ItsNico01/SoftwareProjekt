export class QuestFlow {
    #quests;
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
        console.log(this.#quests.join(" -> "));
    }
}