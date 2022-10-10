const btn = document.getElementById('menu-btn')
const menu = document.getElementById('side-menu')
const close = document.getElementById('close-btn')
let input = document.getElementById('user-input')
const validate = document.getElementById('validate')
const selectCountry = document.getElementById('select-country')
const overlay = document.getElementById('overlay')
const HideAreaCode = document.getElementById('toggleAreaCode')
const icnClearText = document.getElementById('icnClearText')

HideAreaCode.addEventListener('click', function handleClickOutside(event) {
    const box = document.getElementById('box')
    if (!box.contains(event.target)) {
        HideAreaCode.classList.replace('block', 'hidden')
    }
})

btn.addEventListener('click', () => {
    menu.classList.toggle('sidemenu')
    menu.classList.toggle('w-0')
    overlay.classList.replace('hidden', 'block')

})
close.addEventListener('click', () => {
    menu.classList.toggle('sidemenu')
    menu.classList.toggle('w-0')
    overlay.classList.replace('block', 'hidden')
})

function hideAreaCode() {
    HideAreaCode.classList.replace('block', 'hidden')
}
function showAreaCode() {
    HideAreaCode.classList.replace('hidden', 'block')
}
function borderGlowRed() {
    input.classList.replace('border-myGreyShade', 'border-myRedValidation')
    input.classList.replace('focus:border-myGold', 'focus:border-myRedValidation')
    input.classList.replace('hover:border-myGold', 'hover:border-myRedValidation')
}
function borderGlowNormal() {
    input.classList.replace('border-myRedValidation', 'border-myGreyShade')
    input.classList.replace('focus:border-myRedValidation', 'focus:border-myGold')
    input.classList.replace('hover:border-myRedValidation', 'hover:border-myGold')
}
function hideValidate() {
    validate.classList.replace('block', 'hidden')
}
function showSelectCountry() {
    selectCountry.classList.replace('hidden', 'block')
}
function hideSelectCountry() {
    selectCountry.classList.replace('block', 'hidden')
}
function showValidate() {
    validate.classList.replace('hidden', 'block')
}

function hideUserInput(usertext) {
    let userInput = input.value
    let firstChar = userInput.charAt(0);
    let newSubstr
    if (isNaN(userInput)) {
        let getIndex = userInput.indexOf('@')
        newSubstr = firstChar + "****" + userInput.substr(getIndex)
        localStorage.setItem('user-input', newSubstr)
    }
    else {
        let getInputLength = userInput.length;
        let lgthMinus4 = getInputLength - 4;
        let first3Num = userInput.substr(0, 3)
        let last4Num = userInput.substr(lgthMinus4, getInputLength)
        newSubstr = first3Num + "****" + last4Num
        localStorage.setItem('user-input', newSubstr)
    }
}


function textValidation() {
    if (input.value == "") {
        hideValidate()
        borderGlowNormal()
        hideIcnClear()
    }
    else{
        showIcnClear()
    }
    if (input.value.length < 11 && !isNaN(input.value)) {
        hideValidate()
        borderGlowNormal()
    }
    // && isNaN(selectCountry)
    if (input.value.length > 2 && !isNaN(input.value)) {
        showSelectCountry()
    }
    if (input.value.length < 3 || isNaN(input.value)) {
        hideSelectCountry()
    }
    if (input.value.length > 3 && isNaN(input.value)) {
        hideSelectCountry()
    }

}

function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.value.length == 10 && !isNaN(input.value)) {
        hideUserInput(input)
        window.location = "login-password.html"
        return true

    }
    else if (input.value.match(validRegex) && input.value.length >= 10) {
        hideUserInput(input)
        window.location = "login-password.html"
        return true

    } else {
        showValidate()
        borderGlowRed()
        return false
    }

}
function validateBtn() {
    if (input.value == "") {
        showValidate()
        borderGlowRed()
    }

    ValidateEmail(input);
}
function loadHiddenInput() {
    document.getElementById('user-identity').innerHTML = localStorage.getItem('user-input')
    document.getElementById('user-identity2').innerHTML = localStorage.getItem('user-input')

}
function sideMenuHide() {
    menu.classList.toggle('sidemenu')
    menu.classList.toggle('w-0')
    overlay.classList.replace('block', 'hidden')
}
function clearText(){
    input.value =null
}
function hideIcnClear(){
    icnClearText.classList.replace('hidden', 'block')

}
function showIcnClear(){
    icnClearText.classList.replace('block', 'hidden')

}

