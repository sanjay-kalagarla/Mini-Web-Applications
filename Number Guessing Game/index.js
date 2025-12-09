let chances=2;
let lower=1;
let upper=6;
guess=lower+Math.floor(((Math.random()*upper)));

let inp=window.prompt("Guess the number");
while(chances){
    if(inp==guess){
        alert("You win!\nCorrect guess is ",guess);
        break;
    }
    else{
        alert("Press enter to try again\nChances left:",chances);
        inp=window.prompt("Guess the number");
        chances--;
    }
    
}