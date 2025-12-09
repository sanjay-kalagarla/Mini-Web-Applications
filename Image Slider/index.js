let buttons = document.querySelectorAll(".numbers button");
let index = 0;


document.addEventListener("DOMContentLoaded", initSlider);

function initSlider(){
    if(buttons.length>0){
        buttons[index].classList.add("display");
    }
}
function showImage(){
    buttons.forEach(img => {
        img.classList.remove("display");
    })

    if(index < 0){
        index = buttons.length - 1;
    }
    else if(index > buttons.length-1){
        index = 0;
    }
    
    buttons[index].classList.add("display");
}
function previousImage(){
    index--;
    showImage(index);
}
function nextImage(){
    index++;
    showImage(index);
}
