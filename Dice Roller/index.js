
function rollDice(){
    
    const text=document.getElementById("text")
    
    const diceImages=document.getElementById("diceImages")
    const diceResult=document.getElementById("diceResult")

    const values=[];
    const images=[];

    for(let i=0;i<text.value;i++){
        const value=1+Math.floor(Math.random()*6);
        values.push(value);
        images.push(`<img src=faces/${value}.jpg>`);
    }

    diceResult.textContent=`${values.join(', ')}`;
    diceImages.innerHTML=images.join("");
}