import questFlow from "@/quests/QuestFlow.js";
import {mdiCheckOutline, mdiArmFlex, mdiBrain} from '@mdi/js';
import userStore from "@/user/userStore.js";
import {Major} from "@/majors/major.js";

//User aus dem localStorage holen
const user = userStore.getUser();

const major = new Major(user.getMajor);

//Name, Bedingung zur Beendigung, Emoji der Abzeichen
export const badgesData = [
    {name: "Beende das Spiel", finished: questFlow.isEmpty(), icon: mdiCheckOutline},
    {name: "Spiele das Spiel auf 'schwer' durch", finished: questFlow.isEmpty() && user.getDifficulty ==='hard', icon: mdiArmFlex},
    {name: "Melde dich zu allen verfügbaren Prüfungen an", finished:  user.getRegisteredCourses === major.getCourseNames , icon: mdiBrain}
]





