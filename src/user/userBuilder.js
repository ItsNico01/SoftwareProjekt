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
    build(){
        return this.user;
    }
}