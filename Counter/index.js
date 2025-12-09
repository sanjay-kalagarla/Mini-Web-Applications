increase=document.getElementById("increase")
reset=document.getElementById("reset")
decrease=document.getElementById("decrease")
display=document.getElementById("display")

let count=0

function increaseValue(){
    count++;
    display.textContent=count;
}
function resetValue(){
    count=0;
    display.textContent=count;
}
function decreaseValue(){
    count--;
    display.textContent=count;
}