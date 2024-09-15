const minNum = 50;
const maxNum = 100; 

const answer = Math.floor(Math.random()*(maxNum-minNum+1))+minNum
// console.log(answer);

let attempt = 0;
let guess;
let running  = true;
while (running){
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`)
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("Please enter a valid number")
    }
    else if(guess<minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }
    else{
        attempt ++;
        if(guess<answer){
            window.alert("Low!! Try again");
        }
        else if (guess>answer){
            window.alert("High!! Try again");
        }
        else{
            window.alert(`Correct the answer was ${answer} and it took you ${attempt}`)
            running = false;
        }
    }

}