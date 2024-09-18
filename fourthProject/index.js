const button = document.getElementById("sub");
const toC = document.getElementById("toC");
const Ctok = document.getElementById("Ctok");
const FtoK = document.getElementById("FtoK");
const KtoC = document.getElementById("KtoC");
const KtoF = document.getElementById("KtoF");
const Tof = document.getElementById("toF");
const result = document.getElementById("result");
const input = document.getElementById("inn");
let temp;

button.onclick = function(){
    if(Tof.checked){
        temp= Number(input.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = `Temprature in Fahrenheit is ${temp.toFixed(1)} °F`
    }
    else if(toC.checked){
        temp= Number(input.value);
        temp = (temp - 32) * (5/9);
        result.textContent = `Temprature in Celsius is ${temp.toFixed(1)} °C`
    }
    else if(Ctok.checked){
        temp= Number(input.value);
        temp = temp + 273 ;
        result.textContent = `Temprature in Kelvin is ${temp.toFixed(1)} K`
    }
    else if(FtoK.checked){
        temp= Number(input.value);
        temp = (temp - 32) * (5/9);
        temp = temp + 273;
        result.textContent = `Temprature in Kelvin is ${temp.toFixed(1)} K`
    }
    else if(KtoC.checked){
        temp= Number(input.value);
        temp = temp - 273 ;
        result.textContent = `Temprature in Celsius is ${temp.toFixed(1)} °C`
    }
    else if(KtoF.checked){
        temp= Number(input.value);
        temp = temp - 273 ;
        temp = temp * 9 / 5 + 32;
        result.textContent = `Temprature in Fahrenheit is ${temp.toFixed(1)} °F`
    }
}
var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);