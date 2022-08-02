//OPERATION FUNCTIONS

function add(num1, num2) {
    return parseInt(num1) + parseInt(num2)
}

function subtract(num1, num2) {
    return num1 - num2
}

function divide(num1, num2) {
    let result = num1 / num2
    return result //.toFixed(6);
}

function multiply(num1, num2) {
    let result = num1 * num2
    return result //.toFixed(6)
}


//OPERATE FUNCTION

function operate(num1, num2, operator){
    if (operator === '/'){
        displayValue.innerText = divide(num1, num2);
    }else if (operator === '*'){
        displayValue.innerText = multiply(num1, num2);
    }else if (operator === '+'){
        displayValue.innerText = add(num1, num2);
    }else if (operator === '-'){
        displayValue.innerText = subtract(num1, num2);
    }
};


//VARIABLES

const buttons = Array.from(document.querySelectorAll('button'));
const displayValue = document.getElementById('display');

let num1;
let num2;
let operator;

const operatorButtons = Array.from(document.querySelectorAll('#operator'))

const prevDisplayValue = document.querySelector('#prev-display')

function storeValues(){
    num1 = displayValue.innerText;
    displayValue.innerText = ''

}

//POPULATE DISPLAY

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'CLEAR':
                displayValue.innerText = '';
                prevDisplayValue.innerText = '';
                num1 = ''
                num2 = ''
                operator = ''
                break;
            case 'DELETE':
                displayValue.innerText = displayValue.innerText.slice(0, -1)
                break;
            case '/':
                operator = '/'
                prevDisplayValue.innerText = num1 + ' / '
                displayValue.innerText = '';
                break;
            case '*':
                operator = '*'
                prevDisplayValue.innerText = num1 + ' * '
                displayValue.innerText = '';
                break;
            case '+':
                operator = '+'
                prevDisplayValue.innerText = num1 + ' + '
                displayValue.innerText = '';
                break;
            case '-':
                operator = '-'
                prevDisplayValue.innerText = num1 + ' - '
                displayValue.innerText = '';
                break;
            case '=':
                num2 = displayValue.innerText
                prevDisplayValue.innerText += " " + displayValue.innerText;
                operate(num1, num2, operator)
                break;
            default:
                displayValue.innerText += e.target.innerText
                break;
        }
    }) 
});
