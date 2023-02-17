function getNumber(){
    let number = Math.round(Math.random()*10000);
    return number;
}


function getPin(){
    let pinString = getNumber();
    let pin = pinString + '';

    if(pin.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function(){
    let genePin = getPin();
    let inputPin = document.getElementById('pin-input');
    inputPin.value = genePin;
})


document.getElementById('calculate').addEventListener('click', function(event){
    let calNumber = event.target.innerText;
    let calInput = document.getElementById('cal-input');
    let calInputValue = calInput.value;
    if(isNaN(calNumber)){
        if(calNumber === 'C'){
            calInput.value = '';
        }
        else if(calNumber === '<'){
            let previousNumber = calInputValue.split('');
            previousNumber.pop();
            let finalNumber = previousNumber.join('');
            calInput.value = finalNumber;
        }
    }
    else{
        let newCalNumber = calInputValue + calNumber;
        calInput.value = newCalNumber;
    }
})


document.getElementById('verify').addEventListener('click', function(){

    let pinInputElement = document.getElementById('pin-input');
    let pinInputFinal = pinInputElement.value;

    let calInputElement = document.getElementById('cal-input');
    let calInputFinal = calInputElement.value;

    if(calInputFinal === pinInputFinal){
        let matched = document.getElementById('success');
        matched.style.display = 'block';

        let repeat = document.getElementById('repeat');
        repeat.style.display = 'none';
    }
    else{
        let repeat = document.getElementById('repeat');
        repeat.style.display = 'block';

        let matched = document.getElementById('success');
        matched.style.display = 'none';
    }
})