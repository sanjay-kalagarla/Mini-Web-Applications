

/*for(let i=1;i<=5;i++){
    
    document.getElementById(`img${i}`).addEventListener("click", event=>{
        for (let j = 1; j <= 5; j++) {
            document.getElementById(`img${j}`).classList.remove("enabled", "disabled");
        }
        document.getElementById(`img${i}`).classList.add("enabled");
        for(let j=1;j<=5;j++){
            if(j!=i){
                
                //document.getElementById(`img${j}`).classList.remove("enabled");
                document.getElementById(`img${j}`).classList.add("disabled")
                
            }
            
        }
    });
    
}*/

document.getElementById("only").classList.add("enabled");

const container = document.querySelectorAll('.item');

container.forEach(element => {
    element.addEventListener("click", () => {
        removeActiveClasses();
        element.classList.add("enabled");
    })
});

function removeActiveClasses() {
    container.forEach(element => {
        element.classList.remove("enabled");
    });
}

/*
img1.addEventListener("click", event=>{
    event.target.classList.add("enabled");
    img2.classList.remove("enabled");
    img3.classList.remove("enabled");
    img4.classList.remove("enabled");
    img5.classList.remove("enabled");
});
img2.addEventListener("click", event=>{
    event.target.classList.add("enabled");
    img1.classList.remove("enabled");
    img3.classList.remove("enabled");
    img4.classList.remove("enabled");
    img5.classList.remove("enabled");
});
img3.addEventListener("click", event=>{
    event.target.classList.add("enabled");
    img1.classList.remove("enabled");
    img2.classList.remove("enabled");
    img4.classList.remove("enabled");
    img5.classList.remove("enabled");
});
img4.addEventListener("click", event=>{
    event.target.classList.add("enabled");
    img1.classList.remove("enabled");
    img2.classList.remove("enabled");
    img3.classList.remove("enabled");
    img5.classList.remove("enabled");
});
img5.addEventListener("click", event=>{
    event.target.classList.add("enabled");
    img1.classList.remove("enabled");
    img2.classList.remove("enabled");
    img3.classList.remove("enabled");
    img4.classList.remove("enabled");
});
*/