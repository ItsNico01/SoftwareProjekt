import {curriculum} from "@/majors/curriculum.js";

export class Major{
    #name;
    #courses = [];

    constructor(name){
        this.#name = name;
        this.createCourses();
    }

    //Für jeden vorhandenen Kurs in Curriculum jenen Course hinzufügen
    createCourses(){
        const courses = curriculum[this.#name];
        if (courses) {
            courses.forEach(course => this.#courses.push(course));
        }
    }

    get getName(){
        return this.#name;
    }

    get getCourseNames(){
        const courses = []
        for(let x = 0; x < this.#courses.length; x++) {
            courses.push(this.#courses[x].getName);
        }
        return courses;

    }

    getCoursesOf(study){
        const coursesOf = curriculum[study];
        const allCourses = [];
        for (let x = 0; x < coursesOf.length; x++) {
            allCourses.push(this.#courses[x].getName);
        }
        return allCourses;

    }
}