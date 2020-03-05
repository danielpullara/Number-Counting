let randomNumber = Math.ceil(Math.random() * 100); // get the random number between 0 to 1 
console.log("randomNumber:", randomNumber);
let resultArea = document.getElementById("resultArea");
let chanceArea = document.getElementById("chanceArea");
let userGuess = document.getElementById("userinput");
let guessButton = document.getElementById("guessButton");
let historyArea = document.getElementById("history")
let resetButton = document.getElementById("resetButton")
let playButton = document.getElementById("timeCount");
let loseArea = document.getElementById("loseArea");
let time = 5;
let myTime;
let chance = 3;
let history = []
let html = "History: "
chanceArea.innerHTML = `Chance : ${chance}`;


guessButton.addEventListener("click", guess)

// console.log('userGuess', userGuess)
// console.log(guessButton)
playButton.addEventListener("click", timecounting);

function timecounting() {
    myTime = setInterval(() => {
        time -= 1
        document.getElementById('timeCount').innerHTML = time
        if (time === 0) {
            timeOut()
            document.getElementById('loseArea').innerHTML = 'you_lose';
            guessButton.disabled=true
            // playButton.disabled=true
            document.getElementById("timeCount").style.visibility = "hidden";
        }
    }, 1000)// every 1 second, it will add 1 into time variable (computer use millisecond so 1000 is 1 second)
    
}


function timeOut() {
    clearInterval(myTime);
  }

function guess() {
    chance = chance - 1;

    let userNumber = userGuess.value;
    history.push(userNumber)
    console.log("userNumber here:", userNumber);
    let message = ``
    


    if (userNumber === randomNumber) {
        message = "you are correct"
    } else if (userNumber > randomNumber) {
        message = "Too High";
    } else if (userNumber < randomNumber) {
        message = "Too Low";
    }

    chanceArea.innerHTML = `Chance: ${chance}`
    resultArea.innerHTML = `${message}`

    if (chance === 0) {
        document.getElementById('chanceArea').innerHTML = 'you_lose_sucka';
        guessButton.disabled=true
        
        
    }

    // for (let i = 0; i < history.length; i++) {
    //     html = html + history[i] + ","
    // }

    historyArea.innerHTML = history

}

function showMessage(){
    resultArea.innerHTML = `${message}`;
    chanceArea.innerHTML = `Chance: ${chance}`;
    historyArea.innerHTML = history;
}

resetButton.addEventListener ("Click", reset);

function reset() {
    let message = ``
    chance= 3;
    time= 5;
    playButton.innerHTML = "Play_again?", time;
    history= [];
    loseArea.innerHTML = ""
    historyArea.innerHTML = "";
    chanceArea.innerHTML = `Chance: ${chance}`
    resultArea.innerHTML = `${message}`
    guessButton.disabled=false
    //playButton.disabled=false
    document.getElementById("timeCount").style.visibility = "visible";
    
}

