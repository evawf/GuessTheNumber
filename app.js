const theAnswer = Math.floor(Math.random() * 101);
let InputNumber;
console.log(theAnswer);

function reset() {
    setTimeout(function() { location.reload(); }, 2000);
}

function getNumber(event){
    event.preventDefault();
    // Selecting the input element and get its value 
    const guessedNumber = document.getElementById("InputNumber").value;
    // Displaying the value
    console.log(guessedNumber);
    let InputNumber = guessedNumber;

    const showResult = document.getElementById('showResult');
    const Result = document.createElement('div');

    if (InputNumber !== "") {
        if (theAnswer < InputNumber) {
            Result.innerHTML = `${InputNumber} is bigger than the answer!`
            showResult.appendChild(Result);
        }
    
        if (theAnswer > InputNumber) {
            Result.innerHTML = `${InputNumber} is smaller than the answer!`
            showResult.appendChild(Result);
        }
    
        if (theAnswer == InputNumber) {
            Result.innerHTML = `Bingo!!! You are the winner!`
            showResult.appendChild(Result);
            const replayBtn = document.createElement('button');
            replayBtn.innerHTML = "Play Again";
            replayBtn.onclick = function() { location.reload(); };
            showResult.appendChild(replayBtn);
        }
    } else {
        const form = document.getElementById('form');
        const alert = document.createElement('div');
        alert.innerHTML = "Please enter a number!"
        form.appendChild(alert);
        reset();
    }
}

