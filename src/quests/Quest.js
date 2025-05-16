import {QuestData} from "@/quests/QuestData.js";
import {QuestState} from "@/quests/QuestState.js";

export class Quest {
    #name;
    #state;
    #reward;
    #steps;
    constructor(name, steps) {
        this.#name = name;
        this.mapSteps();
        this.#state = QuestState.NOT_STARTED;
        //Todo: Rewards

    }

    //Steps der Quest hinzufügen
    mapSteps(){
        const steps = QuestData[this.#name];
        if (steps) {
            steps.forEach(step => this.#steps.push(step));
        }
    }

    start() {
        this.#state = QuestState.IN_PROGRESS;
    }

    complete() {
        this.#state = QuestState.DONE;
    }

}