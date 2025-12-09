const time = new Date();

let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let timer = null;

const result = document.getElementById('displayTimer');

function start(){
    if(!isRunning){
        startTime = time.now() - elapsedTime;
        timer = setInterval(updateTime, 10);
        isRunning = true;
    }
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = time.now() - startTime;
        isRunning = false;
    }
}
function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    result.textContent = `00:00:00:00`;
    isRunning = false;
}

function updateTime(){

    const currentTime = time.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000*60*60)).toString().padStart(2, '0');
    let minutes = Math.floor(elapsedTime / (1000*60) %60).toString().padStart(2, '0');
    let seconds = Math.floor(elapsedTime / 1000 % 60).toString().padStart(2, '0');
    let milliseconds = Math.floor(elapsedTime % 1000 /10).toString().padStart(2, '0');

    result.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}