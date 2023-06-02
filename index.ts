const characters: string[] = [
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

let firstPassword = document.getElementById("first-password") as HTMLElement;
let secondPassword = document.getElementById("second-password") as HTMLElement;
let buttonGenerate = document.querySelector('.button-gen') 

let passLength = 15;

let passwordStorageFirst: string = "";
let passwordStorageSecond: string = "";



function generate(): void {
    for (let i = 0; i <= passLength; i++) {
        passwordStorageFirst += generateChar1();
        passwordStorageSecond += generateChar2();
        if (
            passwordStorageFirst.length === passLength &&
            passwordStorageSecond.length === passLength
        ) {
            console.log(passwordStorageFirst);
            console.log(passwordStorageSecond);
            firstPassword.textContent = passwordStorageFirst;
            secondPassword.textContent = passwordStorageSecond;
            passwordStorageFirst = "";
            passwordStorageSecond = "";
        }
    }
}

function generateChar1(): string {
    let randomChar1 = Math.floor(Math.random() * characters.length);
    return characters[randomChar1];
}

function generateChar2(): string {
    let randomChar2 = Math.floor(Math.random() * characters.length);
    return characters[randomChar2];
}