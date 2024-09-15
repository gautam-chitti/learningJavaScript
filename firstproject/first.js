const resetbutton = document.getElementById('re');
const incbutton = document.getElementById('countincrease');
const debutton = document.getElementById('countdecrease');
const countt = document.getElementById('count');
let count = 0;
incbutton.onclick = function() {
    count++;
    countt.textContent =  count;
}
debutton.onclick = function() {
    count--;
    countt.textContent =  count;
}
resetbutton.onclick = function() {
    count = 0;
    countt.textContent =  count;
}