const submit = document.getElementById("btn");
const answer = Math.floor(Math.random()*99) + 1 
const input = document.getElementById('input');
const result = document.getElementById('result');
let attempt = 0;

submit.onclick = function(){
    attempt++;
  console.log(`inside onclick`)
  var guessedNum = input.value;

  if (guessedNum < 1 || guessedNum > 100) {
    result.textContent = `Enter a Valid NUmber, total attempts : ${attempt}`;
  }
  else if( guessedNum < answer ){
    result.textContent =  `Answer is greater, total attempts : ${attempt}`;
  }
  else if(guessedNum > answer){
    result.textContent = `Answer is lower, total attempts : ${attempt}`;
  }
  else{
    result.textContent = `Congratulations the number was ${answer} total attempts : ${attempt}` ;
  }
}