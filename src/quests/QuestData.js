import {QuestStep} from "@/quests/QuestStep.js";


export const QuestData = {
    "Finde deinen Stundenplan": [new QuestStep("Gehe auf myHSHL"), new QuestStep("Gehe auf Lernplattform"), new QuestStep("Gehe auf Stundenplanung"), new QuestStep("Wähle deinen Stundenplan aus")],
    "Melde dich zu einer Prüfung an": [new QuestStep("Gehe auf myHSHL"), new QuestStep("Gehe auf Campus Office Online"), new QuestStep("Gehe auf Anmeldung zu den Modulprüfungen"),new QuestStep("Wähle deinen Studiengang aus"), new QuestStep("Melde dich zu einer Prüfung aus deinem Studiengang an")],
}