const btnSubmit = document.querySelector(".btnDisabled");
const inputEmail = document.querySelector(".email");
const inputPwd = document.querySelector(".password");
const inputConfPwd = document.querySelector(".confirmPassword");
// const rest = document.querySelector(".result")
const inputUser = document.querySelector('.inputUser')
const invalidUser = inputUser.nextElementSibling
const invalidEmail = inputEmail.nextElementSibling
const invalidPassword = inputPwd.nextElementSibling
const invalidConfPwd = inputConfPwd.nextElementSibling

let validBtnUserName = false;
let validBtnEmail = false;
let validBtnPassword = false;
let validBtnConfPwd = false;

// eveniment pentru inputul din html inputUser
inputUser.addEventListener('input', updateValue);
//eveniment la inputmail din html care ii atribuim functia pentru validare a mail
inputEmail.addEventListener('input', mailValidation);
//apelam functia in eveniment pentru inputul paswod din html
inputPwd.addEventListener("input", validPassword);
//apelam functia in eveniment pentru inputul paswodconfirm din html
inputConfPwd.addEventListener("input", validConfirmPassword);
// btnSubmit.addEventListener("submit", submitBtnVerif);


//functie pentru eveniment care verifica lungimea str
function updateValue(e) {
    const inputValue = e.target.value
    if (inputValue.length <= 3) {
        invalidUser.classList.remove("validMessage")
        invalidUser.classList.add("invalidMessage")
        validBtnUserName = false
        // console.log(validBtnUserName, "input 1");
    }
    if (inputValue.length > 3) {
        invalidUser.classList.remove("invalidMessage")
        invalidUser.classList.add("validMessage")
        validBtnUserName = true
        // console.log(validBtnUserName, "input 1");
    }
    if (inputValue.length === 0) {
        invalidUser.classList.remove("invalidMessage")
        invalidUser.classList.add("validMessage")
        validBtnUserName = false
    }
    if (validBtnUserName && validBtnEmail && validBtnPassword && validBtnConfPwd) {
        btnSubmit.classList.remove("btnDisabled")
        // console.log(btnSubmit);
    }else{
        btnSubmit.classList.add("btnDisabled")
    }
}

//functie pentru validare email daca contine caracterile necesare din mail
function mailValidation(e) {
    const inputValue = e.target.value
    const validRegex = `[a-z A-Z 0-9 .!#$%&'*+/=?^_\`{|}~-]+@[a-z A-Z]+.[a-z A-Z]`
        // /^[a-z A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z A-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputValue.match(validRegex)) {
        invalidEmail.classList.remove("invalidMessage")
        invalidEmail.classList.add("validMessage")
        validBtnEmail = true
        // console.log(validBtnEmail, "input 2");
    } if(inputValue.startsWith('@') || inputValue.startsWith(".") || inputValue.includes("@@")) {
        invalidEmail.classList.remove("validMessage")
        invalidEmail.classList.add("invalidMessage")
        validBtnEmail = false
        // console.log(validBtnEmail, "input 2");

    }
    if (e.target.value.length <= 0) {
        invalidEmail.classList.remove("invalidMessage")
        invalidEmail.classList.add("validMessage")
        validBtnEmail = false
    }
    if (validBtnUserName && validBtnEmail && validBtnPassword && validBtnConfPwd) {
        btnSubmit.classList.remove("btnDisabled")
    }else{
        btnSubmit.classList.add("btnDisabled")
    }
}

//creiem o functie pentru a verifica lungimea parolei

function validPassword(e) {
    const inputValue = e.target.value
    if (inputValue.length < 6) {
        invalidPassword.classList.remove("validMessage")
        invalidPassword.classList.add("invalidMessage")
        validBtnPassword = false
        // console.log(validBtnPassword, "input 3");
    }
    if (inputValue.length >= 6) {
        invalidPassword.classList.remove("invalidMessage")
        invalidPassword.classList.add("validMessage")
        validBtnPassword = true
        // console.log(validBtnPassword, "input 3");
    }
    if (e.target.value.length <= 0) {
        invalidPassword.classList.remove("invalidMessage")
        invalidPassword.classList.add("validMessage")
        validBtnPassword = false
    }
    if (validBtnUserName && validBtnEmail && validBtnPassword && validBtnConfPwd) {
        btnSubmit.classList.remove("btnDisabled")

    }else{
        btnSubmit.classList.add("btnDisabled")
    }
}

// functie care verifica daca prima parolo egala cu adoua

function validConfirmPassword(e) {
    const inputValue = e.target.value
    if (inputValue === inputPwd.value) {
        invalidConfPwd.classList.remove("invalidMessage")
        invalidConfPwd.classList.add("validMessage")
        validBtnConfPwd = true
        // console.log(validBtnConfPwd, "input 4");
    }
    if (inputValue !== inputPwd.value) {
        invalidConfPwd.classList.remove("validMessage")
        invalidConfPwd.classList.add("invalidMessage")
        validBtnConfPwd = false
        // console.log(validBtnConfPwd, "input 4");
    }
    if (inputValue.length <= 0) {
        invalidConfPwd.classList.remove("invalidMessage")
        invalidConfPwd.classList.add("validMessage")
        validBtnConfPwd = false
    }
    if (validBtnUserName && validBtnEmail && validBtnPassword && validBtnConfPwd) {
        btnSubmit.classList.remove("btnDisabled")
    }else{
        btnSubmit.classList.add("btnDisabled")
    }
}






