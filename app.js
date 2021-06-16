const theAnswer = Math.floor(Math.random() * 101);
let InputNumber;
console.log(theAnswer);

//Reflesh the page
function reset() {
    setTimeout(function() { location.reload(); }, 2000);
};

//Input error notification
function inputNotification() {
    const form = document.getElementById('form');
    const alert = document.createElement('div');
    alert.innerHTML = "Please enter a number!"
    alert.style.color = "red";
    form.appendChild(alert);
    reset();
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
        //Check if input is a number
        if (isNaN(InputNumber)) {
            console.log("not a number");
            inputNotification();
        }

        //Compare the input number with the answer
        if (theAnswer < InputNumber) {
            Result.innerHTML = `${InputNumber} is bigger than the answer!`
            showResult.appendChild(Result);
        }
    
        if (theAnswer > InputNumber) {
            Result.innerHTML = `${InputNumber} is smaller than the answer!`
            showResult.appendChild(Result);
        }
    
        if (theAnswer == InputNumber) {
            const submit = document.getElementById('submit');
            submit.style.display = "none";
            Result.innerHTML = `Bingo!!! You are the winner!`
            Result.style.color = "green";
            showResult.appendChild(Result);
            const replayBtn = document.createElement('button');
            replayBtn.classList.add('item');
            replayBtn.id = "replayBtn";
            replayBtn.innerHTML = "Play Again";
            replayBtn.onclick = function() { location.reload(); };
            showResult.appendChild(replayBtn);
        }
    } else {
        inputNotification();
    }
};