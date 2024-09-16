const mybutton = document.getElementById('myButton')
const myImg = document.getElementById('myImg')

let randomNum = 5;
let min = 1;
let max = 6;
mybutton.onclick = function(){
    console.log('clicked')
    randomNum = Math.floor(Math.random() * max) + min;
    console.log(' the number is ' + randomNum)
    if (randomNum == 1) {
        myImg.src = './images/Untitled1.png';
        console.log('inside condition')
    }
    else if(randomNum == 2){
        myImg.src = './images/Untitled2.png';
    } 
    else if(randomNum == 3){
        myImg.src = './images/Untitled3.png';
    } 
    else if(randomNum == 4){
        myImg.src = './images/Untitled4.png';
    } 
    else if(randomNum == 5){
        myImg.src = './images/Untitled5.png';
    } 
    else {
        myImg.src = './images/Untitled6.png';
    }
}
