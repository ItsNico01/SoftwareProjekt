import { User } from "@/user/user.js";

export class UserStore {
    constructor() {
        this.user = new User();
        this.loadUser();
    }

    //Userdaten aus der RegisterForm.vue werden entgegengenommen und im localStorage gespeichert.
    createUser(avatar) {
        this.user.setFirstName = document.getElementById("firstName").value;
        this.user.setMajor = document.getElementById("major").value;
        this.user.setDifficulty = document.getElementById("difficulty").value;
        this.user.setAvatar = avatar;
        this.saveUser();
        console.log(this.user);
    }

    //User im localStorage speichern.
    saveUser() {
        localStorage.setItem("user", JSON.stringify(this.user));
    }

    // LocalStorage-Daten herausholen und dem User zuweisen.
    loadUser() {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            this.user.setFirstName = userData["firstName"];
            this.user.setMajor = userData["major"];
            this.user.setDifficulty = userData["difficulty"];
            this.user.setAvatar = userData["avatar"];

            console.log(this.user);
        }
    }

    //Den geänderten Avatar als neuen Avatar setzen und den User im localStorage speichern.
    //Nun kann der Avatar in der DesktopView persistent geändert werden.
    updateAvatar(location) {
        this.user.setAvatar = location;
        this.saveUser();
    }

    //Gebe aktuellen User zurück.
    getUser() {
        return this.user;
    }
}
//Der userStore, der im gesamten Programm genutzt wird.
export const userStore = new UserStore();


