let displayEl= document.getElementById('display')
displayEl.textContent = ''
let numberEl = Array.from(document.querySelectorAll('.number'))
console.log(numberEl)
let operandEl = Array.from(document.querySelectorAll('.operand'))
console.log(operandEl)
let equalEl = document.getElementById('equalBtn')
let firstNumber = ''
let secondNumber = ''
let operator = ''


numberEl.map(item=> item.addEventListener('click', () => {
    if (operator === ''){
        firstNumber += item.textContent 
        displayEl.textContent = firstNumber 
        console.log(firstNumber)
    } else{
        displayEl.textContent += item.textContent
        
    }
   
}))


operandEl.map(operandItem=> operandItem.addEventListener('click', () => {
    operator = operandItem.textContent
    displayEl.textContent += operator
   // console.log(operator)
   
}))

switch(operator){
    case (operator === "+"):
     console.log(operator)
     break;
 }

function add(a,b){ console.log(a+b)}  //unir con + - * /?
/*function subtract(a,b){console.log(a-b)}
function multiply(a,b){console.log(a*b)}
function divide(a,b){console.log(a/b)}*/

/*
function operate(operator,a,b){  // break; :
    switch(operator){
       case (operator === "+"):
        console.log(operator)
        break;
    }


} 
*/

/*
equalEl.addEventListener('click', ()=>{
    console.log(ecuation)
})*/

/*
equalEl.addEventListener('click', ()=>{
    displayEl.textContent = ''
})*/


