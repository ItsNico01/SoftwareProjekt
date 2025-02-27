import {ref} from "vue";
export class User {
    #firstName=ref("");
    #major = "";
    #difficulty = "";
    #avatar;
    constructor() {

    }

    get getFirstName() {
        return this.#firstName;
    }

    set setFirstName(firstName) {
        this.#firstName = firstName;
    }

    printName(){
        console.log(this.#firstName.value);
    }

}