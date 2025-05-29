import {QuestData} from "@/quests/QuestData.js";
import {QuestState} from "@/quests/QuestState.js";
import {reactive, ref} from "vue";

export class Quest {
    name =ref();
    state;
    reward;
    steps = [];
    constructor(name) {
        this.name = name;
        this.mapSteps();
        this.state = QuestState.NOT_STARTED;
        //Todo: Rewards

    }

    getName(){
        return this.name;
    }

    //Steps der Quest hinzufügen
    mapSteps(){
        const steps = QuestData[this.name];
        if (steps) {
            steps.forEach(step =>this.steps.push(step));
        }
    }

    //Setze den Aufgabenschritt auf "in progress", der nun dran ist.
    stepInProgress(){
        for(let x = 0; x < this.steps.length; x++) {
            if(this.steps[x].getState() === QuestState.NOT_STARTED){
                this.steps[x].setState(QuestState.IN_PROGRESS);
                break;
            }else{


            }
        }
    }

    //Gebe den Aufgabenschritt zurück, der aktuell "in progress" ist.
    getStepInProgress(){
        for(let x = 0; x < this.steps.length; x++) {
            if(this.steps[x].getState() === QuestState.IN_PROGRESS){
                return this.steps[x];
            }
        }
    }

    getSteps() {
        return this.steps;
    }

    getStepNames(){
        const names = reactive([]);
        for(let x = 0; x < this.steps.length; x++) {
            names.push(this.steps[x].getName());
        }
        return names;
    }

    allStepsCompleted(){
        for(let x = 0; x < this.steps.length; x++){
            if(this.steps[x].getState() !== QuestState.DONE){
                return false;
            }
        }
        return true;
    }

    start() {
        this.state = QuestState.IN_PROGRESS;
    }

    complete() {
        this.state = QuestState.DONE;
    }

}