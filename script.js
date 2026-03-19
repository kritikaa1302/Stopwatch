let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function formatTime(time){

let seconds = Math.floor(time/1000);
let minutes = Math.floor(seconds/60);
let hours = Math.floor(minutes/60);

seconds = seconds % 60;
minutes = minutes % 60;

return (
String(hours).padStart(2,"0")+":"+
String(minutes).padStart(2,"0")+":"+
String(seconds).padStart(2,"0")
);

}

function updateTime(){
elapsedTime = Date.now() - startTime;
display.textContent = formatTime(elapsedTime);
}

document.getElementById("start").onclick = function(){

if(timerInterval) return;

startTime = Date.now() - elapsedTime;
timerInterval = setInterval(updateTime,1000);

};

document.getElementById("pause").onclick = function(){

clearInterval(timerInterval);
timerInterval = null;

};

document.getElementById("reset").onclick = function(){

clearInterval(timerInterval);
timerInterval = null;
elapsedTime = 0;
display.textContent="00:00:00";
laps.innerHTML="";

};

document.getElementById("lap").onclick = function(){

if(elapsedTime===0) return;

let li=document.createElement("li");
li.textContent="🌙 "+display.textContent;
laps.appendChild(li);

};