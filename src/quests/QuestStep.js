import {QuestState} from "@/quests/QuestState.js";
import {ref} from "vue";

export class QuestStep {
    name;
    state;

    constructor(name) {
        this.state = QuestState.NOT_STARTED;
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state;
    }

    start() {
        this.state = QuestState.IN_PROGRESS;
    }

    complete() {
        this.state = QuestState.DONE;
    }


}