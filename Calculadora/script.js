const display = document.querySelector(".display_text");
let calculatorOn = false;

const turnOn = () => {

  calculatorOn = true;

  display.innerHTML = "0";

};

const turnOff = () => {

  calculatorOn = false;

  display.innerHTML = "";

};

const insert = (num) => {
    
  if (!calculatorOn) return;

  if (display.innerHTML.length >= 7) return; 

  if (num === "." && display.innerHTML.includes(".")) return;

  if (display.innerHTML === "0" && num !== ".") {

    display.innerHTML = num;

  } else {

    display.innerHTML += num;

  };
};

const calculate = () => {

    if (!calculatorOn) return;

    let result = display.innerHTML;

    if(result){
        
        display.innerHTML = eval(result)

    };
};





/*let calculatorOn = false;
let currentInput = "";
let previousInput = "";
let operator = "";
let justCalculated = false;

function calculate(){
        
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result;

    if (operator === '+'){
        result = prev + current;
    }else if (operator === '-') {
        result = prev - current;
    } else if (operator === 'x') {
        result = prev * current;
    } else if (operator === '÷') {
        if (current === 0) {
            return "Error"; 
        }
        result = prev / current;
    } else if (operator === '%') {
        result = prev % current;
    }

    return result();
};

function turnOn() {
      document.querySelector(".display_text").textContent = "0";
};

/*function turnOff() {
      document.querySelector(".visor").textContent = "";
};

const turnOff = () => {
    document.querySelector(".display_text").textContent = "";
};


buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            display.textContent += value;
        });
});*/