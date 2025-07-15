import {ref} from "vue";
export class User {
    #firstName=ref("");
    #major = "";
    #difficulty = "";
    #avatar = "";
    #level;
    registeredCourses = [];
    constructor(name, major, difficulty, avatar) {
        this.#firstName = name;
        this.#major = major;
        this.#difficulty = difficulty;
        this.#avatar = avatar;
        this.#level = 1;


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

    setRegisteredCourses(registeredCourse) {
        this.registeredCourses.push(registeredCourse);

    }

    setLevel(level) {
        this.#level = level;
    }
    levelup(){
        this.#level++;
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

    get getRegisteredCourses() {
        return this.registeredCourses;
    }

    get getLevel() {
        return this.#level;
    }
    


    //zum Speichern im localStorage
    toJSON() {
        return {
            firstName: this.#firstName,
            major: this.#major,
            difficulty: this.#difficulty,
            avatar: this.#avatar,
            registeredCourses: this.registeredCourses,
            level: this.#level,

        };
    }


}

