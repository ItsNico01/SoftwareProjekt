import {User} from "@/user/user.js";

export class UserBuilder {
    constructor() {
        this.user = new User();
    }

    setName(name) {
        this.user.setFirstName(name);
        return this;
    }
    setMajor(major) {
        this.user.setMajor(major);
        return this;
    }
    setDifficulty(difficulty) {
        this.user.setDifficulty(difficulty);
        return this;
    }
    setAvatar(avatar) {
        this.user.setAvatar(avatar);
        return this;
    }
    setLevel(level) {
        this.user.setLevel(level);
        return this;
    }
    setRegisteredCourses(courses) {

        if (Array.isArray(courses)) {
            // Flach machen, falls Arrays verschachtelt sind
            this.user.registeredCourses = courses.flat();

        } else if(!this.user.getRegisteredCourses.includes(courses)) {
            this.user.setRegisteredCourses(courses);
        }
        return this;
    }
    build(){
        return this.user;
    }
}