let InputNumber;
const theAnswer = Math.floor(Math.random() * 11);
console.log(theAnswer);

function getNumber(){
    // Selecting the input element and get its value 
    const guessedNumber = document.getElementById("InputNumber").value;
    // Displaying the value
    console.log(guessedNumber);
    let InputNumber = guessedNumber;

    const showResult = document.getElementById('showResult');
    const Result = document.createElement('div');

    if (theAnswer < InputNumber) {
        Result.innerHTML = `${InputNumber} is bigger than the answer!`
        showResult.appendChild(Result);
    }

    if (theAnswer > InputNumber) {
        Result.innerHTML = `${InputNumber} is smaller than the answer!`
        showResult.appendChild(Result);
    }

    if (theAnswer == InputNumber) {
        Result.innerHTML = `Bingo!!! You got the correct number!`
        showResult.appendChild(Result);
    }
}