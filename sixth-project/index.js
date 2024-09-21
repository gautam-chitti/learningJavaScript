const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const specialCharacters = '-!@$%&';
const numbers = '0123456789';
const lowerCase = document.getElementById('lowerCase'); 
const mybutton = document.getElementById('btn'); 
const upperCase = document.getElementById('upperCase'); 
const specialCharacter = document.getElementById('specialCharacter'); 
const nums = document.getElementById('nums'); 
const input = document.getElementById('input'); 
const showAns = document.getElementById('result'); 

mybutton.onclick = function (){
    let characterToBeUsed = '';
    let password = '';
    if (lowerCase.checked) {
        characterToBeUsed += lowerCaseLetters;
        password += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
    }
    if (upperCase.checked) {
        characterToBeUsed += upperCaseLetter;
        password += upperCaseLetter[Math.floor(Math.random() * upperCaseLetter.length)];
    }
    if (specialCharacter.checked) {
        characterToBeUsed += specialCharacters;
        password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
    if (nums.checked) {
        characterToBeUsed += numbers;
        password += numbers[Math.floor(Math.random() * numbers.length)];
    }
    let askedLen = input.value;
    let length = input.value - password.length;
    if(askedLen < 8 ){
        alert("Password must be atleast 8 characters long")
    }
    for (let i = 0; i < length; i++) {
        password += characterToBeUsed[Math.floor(Math.random() * characterToBeUsed.length)];
    }

    function shuffle(str) {
        let arr = str.split(''); // Convert string to array
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // Generate random index
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
        return arr.join(''); // Convert array back to string
    }
password = shuffle(password);
showAns.textContent = `Password : ${password}`
}

