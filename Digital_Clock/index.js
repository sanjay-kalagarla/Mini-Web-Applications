function updateClock(){

    const now = new Date();

    
    let hours = now.getHours();
    const denotion = hours>=12 ? `PM`: `AM`
    hours = hours%12;
    hours = hours==0? 12: hours;

    
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    
    const time = `${hours.toString().padStart(2, 0)}:${minutes}:${seconds}  ${denotion}`;
    document.getElementById('result').textContent = time;
}

updateClock();
setInterval(updateClock, 1000);
