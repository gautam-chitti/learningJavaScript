const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const specialCharacters = '-!@$%&';
const numbers = '0123456789';
const lowerCase = document.getElementById(); 
const mybutton = document.getElementById(); 
const upperCase = document.getElementById(); 
const specialCharacter = document.getElementById(); 
const nums = document.getElementById(); 
const input = document.getElementById(); 
const  = document.getElementById(); 

let characterToBeUsed = '';
mybutton.onclick = function (){
if (lowerCase.checked) {
    characterToBeUsed += lowerCaseLetters;
}
if (upperCase.checked) {
characterToBeUsed += upperCaseLetter;    
}
if (specialCharacter.checked) {
    characterToBeUsed += specialCharacters;
}
if (number.checked) {
    characterToBeUsed += numbers;
    
}
let length  = input.Value;
let password = genratepass(characterToBeUsed);
}
function genratepass(characterToBeUsed, lenght){ 
    let result = '';
     for (let index = 0; index < characterToBeUsed.length; index++) {
        let randomindex = Math.floor(Math.random()*characterToBeUsed.length) +1;
        result.push(characterToBeUsed[randomindex]);
     }
     return result;
}

