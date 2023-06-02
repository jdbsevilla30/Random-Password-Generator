"use strict";
const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
];
let firstPassword = document.getElementById("first-password");
let secondPassword = document.getElementById("second-password");
let buttonGenerate = document.getElementById('button-gen');
let passLength = 15;
let passwordStorageFirst = "";
let passwordStorageSecond = "";
buttonGenerate === null || buttonGenerate === void 0 ? void 0 : buttonGenerate.addEventListener("click", function () {
    console.log("Clicked");
});
function generate() {
    for (let i = 0; i <= passLength; i++) {
        passwordStorageFirst += generateChar1();
        passwordStorageSecond += generateChar2();
        if (passwordStorageFirst.length === passLength &&
            passwordStorageSecond.length === passLength) {
            console.log(passwordStorageFirst);
            console.log(passwordStorageSecond);
            firstPassword.textContent = passwordStorageFirst;
            secondPassword.textContent = passwordStorageSecond;
            passwordStorageFirst = "";
            passwordStorageSecond = "";
        }
    }
}
function generateChar1() {
    let randomChar1 = Math.floor(Math.random() * characters.length);
    return characters[randomChar1];
}
function generateChar2() {
    let randomChar2 = Math.floor(Math.random() * characters.length);
    return characters[randomChar2];
}
