const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("password-one");
let passwordTwoEl = document.getElementById("password-two");
let copyPasswordOneEl = document.getElementById("password-one");
let copyPasswordTwoEl = document.getElementById("password-two");
let hintEl = document.getElementById("hint");


function renderPasswords() {
    let passwordOne = getRandomPassword();
    let passwordTwo = getRandomPassword();
    passwordOneEl.textContent = passwordOne;
    passwordTwoEl.textContent = passwordTwo;
}


function getRandomPassword() {
    let password = "";
    for (let i = 0; i < 11; i++) {
        let index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }
    hintEl.textContent = "Hint: Click a password to copy it to your clipboard";
    return password;
}

function copyToClipboardPOne() {
    // Get the text field
    let text = copyPasswordOneEl.innerHTML;
    if (text) {
        navigator.clipboard.writeText( text );
        alert(`Copied password: ${text}`)
    }
}

function copyToClipboardPTwo() {
    // Get the text field
    let text = copyPasswordTwoEl.innerHTML;
    if (text) {
        navigator.clipboard.writeText( text );
        alert(`Copied password: ${text}`)
    }
}