const button=document.querySelector(".button");
const input=document.querySelector(".input");

input.classList.add("disabled");
input.classList.remove("enabled");

let enabled=false;

button.addEventListener("click",function(){
    if(!enabled){
        input.classList.remove("disabled");
        input.classList.add("enabled");
        enabled=true;
    }
    else{
        input.classList.remove("enabled");
        input.classList.add("disabled");
        enabled=false;
    }
})