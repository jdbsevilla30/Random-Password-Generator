const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];


let firstPassword = document.getElementById("first-password");
let secondPassword = document.getElementById("second-password");



let passwordStorageFirst = "";
let passwordStorageSecond = "";


function generate() {

    for (let i = 0; i <= 15; i++) {
        passwordStorageFirst += characters[Math.floor(Math.random() * characters.length)];
        passwordStorageSecond += characters[Math.floor(Math.random() * characters.length)];

        if (passwordStorageFirst.length === 15 && passwordStorageSecond.length === 15) {
            console.log(passwordStorageFirst);
            console.log(passwordStorageSecond);
            firstPassword.textContent = passwordStorageFirst;
            secondPassword.textContent = passwordStorageSecond;
            passwordStorageFirst = "";
            passwordStorageSecond = "";
        }
    }
}

