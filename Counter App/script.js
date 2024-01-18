document.getElementById('incrementBtn').addEventListener('click',incrementCounter);
document.getElementById('decrementBtn').addEventListener('click',decrementCounter);
document.getElementById('resetBtn').addEventListener('click',resetCounter);


// creating variables
let counterDisplay = document.getElementById('counter-display');
let counterValue = 0;

function updateCounterDisplay(){
    counterDisplay.textContent = counterValue;
} 



function incrementCounter(){
    counterValue++;
    updateCounterDisplay();
} 



function decrementCounter(){
    if(counterValue > 0){
        counterValue--;
        updateCounterDisplay();
    }
    
}



function resetCounter(){
    counterValue = 0;
    updateCounterDisplay();
} 




