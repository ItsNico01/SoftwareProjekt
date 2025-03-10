import {User} from "@/user/user.js";

//Der User, der im gesamten Programm genutzt wird.
export const user =  new User();

//Userdaten aus der RegisterForm.vue werden entgegengenommen und im localStorage gespeichert.
export function createUser(avatar){
    user.setFirstName = document.getElementById("firstName").value;
    user.setMajor = document.getElementById("major").value;
    user.setDifficulty = document.getElementById("difficulty").value;
    user.setAvatar = avatar;

    localStorage.setItem("user", JSON.stringify(user));
    console.log(user);
}
// LocalStorage-Daten herausholen und dem User zuweisen.
export function loadUser() {
    const userData = JSON.parse(localStorage.getItem('user'));

    user.setFirstName = userData["firstName"];
    user.setMajor = userData["major"];
    user.setDifficulty = userData["difficulty"];
    user.setAvatar = userData["avatar"];

    console.log(user);


}
//Den geänderten Avatar als neuen Avatar setzen und den User im localStorage speichern.
//Nun kann der Avatar in der DesktopView persistent geändert werden.
export function updateAvatar(location) {
    user.setAvatar = location;
    localStorage.setItem("user", JSON.stringify(user));
    console.log(user);

}

