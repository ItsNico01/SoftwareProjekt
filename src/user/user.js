import {ref} from "vue";
export class User {
    #firstName=ref("");
    #major = "";
    #difficulty = "";
    #avatar = "";
    constructor(name, major, difficulty, avatar) {
        this.#firstName = name;
        this.#major = major;
        this.#difficulty = difficulty;
        this.#avatar = avatar;
    }

    setFirstName(name) {
        this.#firstName = name;
    }

    setMajor(major) {
        this.#major = major;
    }

    setDifficulty(diff) {
        this.#difficulty = diff;
    }

    setAvatar(avatar) {
        this.#avatar = avatar;
    }

    get getFirstName() {
        return this.#firstName;
    }

    get getMajor() {
        return this.#major;
    }

    get getDifficulty() {
        return this.#difficulty;
    }

    get getAvatar() {
        return this.#avatar;
    }


    //zum Speichern im localStorage
    toJSON() {
        return {
            firstName: this.#firstName,
            major: this.#major,
            difficulty: this.#difficulty,
            avatar: this.#avatar
        };
    }


}

