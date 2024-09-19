
const mybutton = document.getElementById('sub');


mybutton.onclick = function(){
const result = document.getElementById('diceResult')
const values = [];
const images = [];

const imgholder = document.getElementById('imageHolder');
    const input = document.getElementById('input');
    const numberOfDices = input.value;
    if(numberOfDices > 30){
        alert('Please Enter a Value less than 30 for better visuals')
    }
        for(let i = 1 ; i <= numberOfDices; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value)
        images.push(`<img src="images/${value}.png">`);
        

    }

    result.textContent = `Dice : ${values.join(', ')}`;
    imgholder.innerHTML=images.join('');

}
