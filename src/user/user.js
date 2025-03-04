import {ref} from "vue";
export class User {
    #firstName=ref("");
    #major = "";
    #difficulty = "";
    //#avatar;
    constructor() {

    }

    get getFirstName() {
        return this.#firstName;
    }

    set setFirstName(firstName) {
        this.#firstName = firstName;
    }

    get getMajor() {
        return this.#major;
    }

    set setMajor(major) {
        this.#major = major;
    }

    get getDifficulty() {
        return this.#difficulty;
    }

    set setDifficulty(difficulty) {
        this.#difficulty = difficulty;
    }

    toJSON() {
        return {
            firstName: this.#firstName,
            major: this.#major,
            difficulty: this.#difficulty
        };
    }

}