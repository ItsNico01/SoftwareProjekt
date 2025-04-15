import {UserBuilder} from "@/user/userBuilder.js";

export class UserStore {
    constructor() {
        this.loadUser();
    }

    //Userdaten aus der RegisterForm.vue werden entgegengenommen und im localStorage gespeichert.
    createUser(avatar) {

        this.user = new UserBuilder().setName(document.getElementById("firstName").value)
            .setMajor(document.getElementById("major").value)
            .setDifficulty(document.getElementById("difficulty").value)
            .setAvatar(avatar)
            .build();


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
            this.user = new UserBuilder()
                .setName(userData["firstName"])
                .setMajor(userData["major"])
                .setDifficulty(userData["difficulty"])
                .setAvatar(userData["avatar"])
                .build();

            console.log(this.user);
        }
    }

    //Den geänderten Avatar als neuen Avatar setzen und den User im localStorage speichern.
    //Nun kann der Avatar in der DesktopView persistent geändert werden.
    updateAvatar(location) {
        this.user.setAvatar(location);
        this.saveUser();
    }

    //Gebe aktuellen User zurück.
    getUser() {
        return this.user;
    }
}
//Der userStore, der im gesamten Programm genutzt wird.
export const userStore = new UserStore();


