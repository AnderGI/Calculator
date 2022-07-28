//SET MORE THAN TWO NUMBERS STRAIGHT
// DOT AS A WAY OF CREATING FLOATING NUMBERS
// EVALUATE FIRST SECOND AND RESULT. IF THEY ARE FLOATING NUMBERS THE ECUATIONSS ANSWER MUST HAVE 3 DECIMALS

let displayEl = document.getElementById('display')
let numberEl = document.querySelectorAll('.number')
let operandEl = document.querySelectorAll('.operand')
let equalEl = document.getElementById('equalBtn')
let clearEl = document.getElementById('clearBtn')
let deleteEl = document.getElementById('deleteBtn')
let dotEl = document.getElementById('dot')
let firstNumber = ''
let secondNumber= ''
let operator = ''
let result = ''
let noManyDecimanls;

dotEl.addEventListener('click', ()=>{
    if(operator===''){
        firstNumber += '.'
        console.log(`The first number is ${firstNumber}`, typeof firstNumber)   
        displayEl.textContent += '.'
    }
    else{ 
        secondNumber += '.'
        console.log(`The second number is ${secondNumber}`, typeof secondNumber)
        displayEl.textContent += '.'
    }
})



function add(a,b){
    console.log((Number(a)+Number(b)).toFixed(3))
    displayEl.textContent = (Number(a)+Number(b)).toFixed(3)
}
function subtract(a,b){
    console.log((Number(a)-Number(b)).toFixed(3))
    displayEl.textContent =(Number(a)-Number(b)).toFixed(3)
}
function multiply(a,b){
    console.log((Number(a)*Number(b)).toFixed(3))
    displayEl.textContent = (Number(a)*Number(b)).toFixed(3) 
}
function divide(a,b){
    if (b==='0'){
    displayEl.textContent = `Nope. You can't divide by zero`
    console.log(`nope`)
}else{
    console.log((Number(a)/Number(b)).toFixed(3))
    displayEl.textContent = (Number(a)/Number(b)).toFixed(3)
}
}
function exponent(a,b){
    console.log((Number(a)**Number(b)).toFixed(3))
    displayEl.textContent = (Number(a)**Number(b)).toFixed(3)
}

function operate(operator, num1, num2){

    switch(operator) {
        case '+':
          add(num1,num2)
        break;

        case '-':
            subtract(num1,num2)
        break;
        case '*':
            multiply(num1,num2)
        break;
        case '/':
            divide(num1,num2)
        break;
        case '**': 
            exponent(num1,num2)
        break;
      }
}

function display(){   

    numberEl.forEach(item=>{
        item.addEventListener('click', e=>{
        if(operator===''){
            firstNumber += e.target.innerText
            console.log(`The first number is ${firstNumber}`, typeof firstNumber)   
            displayEl.textContent += e.target.innerText
        }
        else{ 
            secondNumber += e.target.innerText
            console.log(`The second number is ${secondNumber}`, typeof secondNumber)
            displayEl.textContent += e.target.innerText
        }
        })
    })

}

display()

operandEl.forEach(item => {
    item.addEventListener('click', ()=>{
        console.log(`The operator is ${item.textContent}`,typeof item.textContent)
        operator = item.textContent
        displayEl.textContent = ''
        })
})

function equalResult (){
    operate(operator, firstNumber, secondNumber)
    result = displayEl.textContent
    console.log(`The result and the firs number of the next ecuation is ${result}`, typeof result)
    firstNumber = result 
    secondNumber = ''
    operator = ''
   

}
equalEl.addEventListener('click',equalResult)

clearEl.addEventListener('click',clear)

function clear(){
    displayEl.textContent = ''
    firstNumber = ''
    console.log(`the first number is ${firstNumber}`, typeof firstNumber)
    secondNumber = ''
    console.log(`the second number is ${secondNumber}`, typeof secondNumber)
    result = ''
    console.log(`the result is ${result}`, typeof result)
    operator = ''
    console.log(`the operator is ${operator}`, typeof operator)
}


deleteEl.addEventListener('click',deleteDisplay )
function deleteDisplay(){
    if(operator===''){
        firstNumber = firstNumber.slice(0, -1)
        displayEl.textContent= firstNumber
        console.log(`the first number ${firstNumber}`, typeof firstNumber)
        console.log(typeof displayEl.textContent)
    } else{

        secondNumber = secondNumber.slice(0, -1)
        displayEl.textContent= secondNumber
        console.log(`the first number ${secondNumber}`, typeof secondNumber)
        console.log(typeof displayEl.textContent)
    }

}

// KEYBOARD
document.addEventListener('keydown', (event)=>{
        if(operator==='' && event.key!== '+' && event.key!== '/' && event.key!== '*' && event.key!== '-' && event.key!== 'Backspace'){
            firstNumber += event.key
            console.log(`The first number is ${firstNumber}`, typeof firstNumber)      
            displayEl.textContent += event.key
        }

    switch(event.key) {
        case '+':
          operator = event.key
          displayEl.textContent = event.key
          console.log(`the operator is ${operator}`, typeof operator)
        break;
        case '-':
          operator = event.key
          displayEl.textContent = event.key
          console.log(`the operator is ${operator}`,  typeof operator)
        break;
        case '/':
          operator = event.key
          displayEl.textContent = event.key
          console.log(`the operator is ${operator}`,  typeof operator)
        break;
        case '*':
          operator = event.key
          displayEl.textContent = event.key
          console.log(`the operator is ${operator}`,  typeof operator)
        break;
        case 'Enter':
            equalResult()
          break;
        case 'Delete':
            clear()
        break;
        /* FOR DELETIN ITEMS*/
        case 'Backspace':
            if(operator===''){
                firstNumber = firstNumber.slice(0, -1)
                displayEl.textContent= firstNumber
                console.log(`the first number ${firstNumber}`, typeof firstNumber)
                console.log(typeof displayEl.textContent)
            } else{
        
                secondNumber = secondNumber.slice(0, -1)
                displayEl.textContent= secondNumber
                console.log(`the first number ${secondNumber}`, typeof secondNumber)
                console.log(typeof displayEl.textContent)
            }
        break;
     // DOT FOR DECIMALS
     /*   case '.':
                   
          break;*/
        
    }
        if(operator!=='' && event.key!== '+' && event.key!== '/' && event.key!== '*' && event.key!== '-' && event.key!== 'Backspace'){ 
            secondNumber += event.key
            console.log(`The second number is ${secondNumber}`, typeof secondNumber)
            displayEl.textContent += event.key
        }

    
})





