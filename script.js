const btnSubmit = document.querySelector(".btnDisabled");
const inputEmail = document.querySelector(".email");
const inputPwd = document.querySelector(".password");
const inputConfPwd = document.querySelector(".confirmPassword");
const inputUser = document.querySelector('.inputUser')
const invalidUser = inputUser.nextElementSibling
const invalidEmail = inputEmail.nextElementSibling
const invalidPassword = inputPwd.nextElementSibling
const invalidConfPwd = inputConfPwd.nextElementSibling


const validButtonSubmit = {
    userName: false,
    email: false,
    firstPassword: false,
    secondPassword: false,
}

inputUser.addEventListener('input', userNameValidation);
inputEmail.addEventListener('input', mailValidation);
inputPwd.addEventListener("input", validPassword);
inputConfPwd.addEventListener("input", validConfirmPassword);


function userNameValidation(e) {
    const inputValue = e.target.value.trim()
    if (inputValue.length <= 3) {
        showErrorMessage(invalidUser, "userName")
    }
    if (inputValue.length > 3) {
        hideMessageError(invalidUser, "userName")
    }
    if (!inputValue.length) {
        hideMessageError(invalidUser, "userName")
    }
    validationSubmit()
}

function mailValidation(e) {
    const inputValue = e.target.value
    const validRegex = `[a-z A-Z 0-9 !#$%&'*+/=?^_\`{|}~-]+@[a-z A-Z]+.[a-z A-Z]`;
    if (inputValue.match(validRegex)) {
        hideMessageError(invalidEmail, "email")
    }
    if (inputValue.startsWith('@') || inputValue.startsWith(".") || inputValue.includes("@@") || !inputValue.match(validRegex)) {
        showErrorMessage(invalidEmail, "email")
    }
    if (!inputValue.length) {
        hideMessageError(invalidEmail, "email")
    }
    validationSubmit()
}

function validPassword(e) {
    const inputValue = e.target.value.trim()
    if (inputValue.length < 6) {
        showErrorMessage(invalidPassword, "firstPassword")

    }
    if (inputValue.length >= 6) {
        hideMessageError(invalidPassword, "firstPassword")

    }
    if (!inputValue.length) {
        hideMessageError(invalidPassword, "firstPassword")

    }

    if (inputValue !== inputConfPwd.value && invalidConfPwd.value) {
        hideMessageError(invalidConfPwd, "secondPassword")

    }
    validationSubmit()
}


function validConfirmPassword(e) {
    const inputValue = e.target.value.trim()
    if (inputValue.includes(inputPwd.value.trim())) {
        hideMessageError(invalidConfPwd, "secondPassword")
    }
    if (inputValue !== inputPwd.value.trim()) {
        showErrorMessage(invalidConfPwd, "secondPassword")
    }
    if (!inputValue.length) {
        showErrorMessage(invalidConfPwd, "secondPassword")
    }
    validationSubmit()
}

function validationSubmit() {

    const validValues = Object.values(validButtonSubmit)

    const num = validValues.filter((elem) => {
        return elem
    }).length
    if (num === 4) {
        btnSubmit.classList.remove("btnDisabled")
    } else {
        btnSubmit.classList.add("btnDisabled")
    }
}

//objectValues, objectkeys

function hideMessageError(element, key) {
    element.classList.remove("showErrorMessage")
    element.classList.add("hideErrorMessage")
    validButtonSubmit[key] = true
}

function showErrorMessage(elementMessage, key) {
    elementMessage.classList.remove("hideErrorMessage")
    elementMessage.classList.add("showErrorMessage")
    validButtonSubmit[key] = false
}


























































