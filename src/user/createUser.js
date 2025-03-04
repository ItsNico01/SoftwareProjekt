import {User} from "@/user/user.js";

export const user =  new User();

//Userdaten aus dem RegisterForm.vue werden entgegengenommen.
export function createUser(){
    user.setFirstName = document.getElementById("firstName").value;
    user.setMajor = document.getElementById("major").value;
    user.setDifficulty = document.getElementById("difficulty").value;

    localStorage.setItem("user", JSON.stringify(user));

}


