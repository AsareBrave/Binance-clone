let password = document.getElementById('password')
const hideIcnClearPasswordText = document.getElementById('icnClearPasswordText')
const icnShowPassword = document.getElementById('icnShowpassword')
const icnHidePassword = document.getElementById('icnHidepassword')

function hidePasswordIcn() {
    hideIcnClearPasswordText.classList.replace('block', 'hidden')
}
function showPasswordInc() {
    hideIcnClearPasswordText.classList.replace('hidden', 'block')
}

function clearPasswordText() {
    password.value = ""
    hidePasswordIcn();
}

function showPasswordIcnFocus() {
    if (password.value.length != "") {
        showPasswordInc();
    } else {
        hidePasswordIcn();
    }
}

function showPassword() {
    icnShowPassword.classList.replace('block', 'hidden')
    icnHidePassword.classList.replace('hidden', 'block')
    password.type = "text"
}
function hidePassword() {
    icnHidePassword.classList.replace('block', 'hidden')
    icnShowPassword.classList.replace('hidden', 'block')
    password.type = "password"
}

function validatePassword() {
    if (password.value.length > 0) {
        showPasswordInc();
    }else{
        hidePasswordIcn();
    }
}