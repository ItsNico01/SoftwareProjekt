export class Course {
    #name;
    #semester;

    constructor(name, semester) {
        this.#name = name;
        this.#semester = semester;
    }

    get getName(){
        return this.#name;
    }

}