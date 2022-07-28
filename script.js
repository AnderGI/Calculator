//SET MORE THAN TWO NUMBERS STRAIGHT
// EVALUATE FIRST SECOND AND RESULT. IF THEY ARE FLOATING NUMBERS THE EQUATIONS ANSWER MUST HAVE 3 DECIMALS

const displayEl = document.getElementById('display')
const numberEl = document.querySelectorAll('.number')
const operandEl = document.querySelectorAll('.operand')
const equalEl = document.getElementById('equalBtn')
const clearEl = document.getElementById('clearBtn')
const deleteEl = document.getElementById('deleteBtn')
const dotEl = document.getElementById('dot')

let firstNumber = ''
let secondNumber= ''
let operator = ''
let result = ''

//ADD
function add(a,b){
    if(! Number.isInteger(firstNumber) && Number.isInteger(secondNumber)){
    console.log((Number(a)+Number(b)).toFixed(3))
    displayEl.textContent = (Number(a)+Number(b)).toFixed(3)
    }else{
        console.log(Number(a)+Number(b))
        displayEl.textContent = Number(a)+Number(b)
    }
}

//SUBTRACT
function subtract(a,b){
    if(! Number.isInteger(firstNumber) && Number.isInteger(secondNumber)){
        console.log((Number(a)-Number(b)).toFixed(3))
        displayEl.textContent = (Number(a)-Number(b)).toFixed(3)
        }else{
            console.log(Number(a)-Number(b))
            displayEl.textContent = Number(a)-Number(b)
        }
}

//MULTIPLY
function multiply(a,b){
    if(! Number.isInteger(firstNumber) && Number.isInteger(secondNumber)){
        console.log((Number(a)*Number(b)).toFixed(3))
        displayEl.textContent = (Number(a)*Number(b)).toFixed(3)
        }else{
            console.log(Number(a)*Number(b))
            displayEl.textContent = Number(a)*Number(b)
        }
}

//DIVIDE
function divide(a,b){
    if (b==='0'){
    displayEl.textContent = `Nope. You can't divide by zero.`
}else{
    if(! Number.isInteger(firstNumber) && Number.isInteger(secondNumber)){
        console.log((Number(a)/Number(b)).toFixed(3))
        displayEl.textContent = (Number(a)/Number(b)).toFixed(3)
        }else{
            console.log(Number(a)/Number(b))
            displayEl.textContent = Number(a)/Number(b)
        }
}
}

//EXPONENT
function exponent(a,b){
    if(! Number.isInteger(firstNumber) && Number.isInteger(secondNumber)){
        console.log((Number(a)**Number(b)).toFixed(3))
        displayEl.textContent = (Number(a)**Number(b)).toFixed(3)
        }else{
            console.log(Number(a)**Number(b))
            displayEl.textContent = Number(a)**Number(b)
        }
}

//OPERATE THE NUMBERS WITH THE OPERATORS
function operate(operator, num1, num2){
    switch(operator) {
        case '+':
          add(num1,num2)
        break;

        case '-':
            subtract(num1,num2)
        break;
        case 'x':
            multiply(num1,num2)
        break;
        case '/':
            divide(num1,num2)
        break;
        case '*': 
            exponent(num1,num2)
        break;
      }
}

//DISPLAY EACH ITEM ON THE DISPLAY DIV
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

//EQUAL
function equalResult (){
    operate(operator, firstNumber, secondNumber)
    result = displayEl.textContent
    console.log(`The result is ${result}`, typeof result)
    firstNumber = result 
    secondNumber = ''
    operator = ''
}

//CLEAR EVERYTHING AND SET IT UP TO START POINT
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

// EVERYTIME THE "DEL" DIV IS CLICKED THE LAST ELEMENT OF THE STRING IS ELIMINATED
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

// ADD A DOT TO CREATE A DECIMAL NUMBER
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

//CHOOSE THE OPERATOR
operandEl.forEach(item => {
    item.addEventListener('click', ()=>{
        console.log(`The operator is ${item.textContent}`,typeof item.textContent)
        operator = item.textContent
        displayEl.textContent = ''
        })
})

equalEl.addEventListener('click',equalResult)
clearEl.addEventListener('click',clear)
deleteEl.addEventListener('click',deleteDisplay )

// KEYBOARD.
document.addEventListener('keydown', (event)=>{
    //FIRST NUMBER
        if(operator==='' && event.key!== '+' && event.key!== '*' && event.key!== '/' && event.key!== 'x' && event.key!== '-' && event.key!== 'Backspace'){
            firstNumber += event.key
            console.log(`The first number is ${firstNumber}`, typeof firstNumber)      
            displayEl.textContent += event.key
        }
    
    //OPERATOR, EQUATIONS AND CALCULATOR LOGIC
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

        case 'x':
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

        case 'Delete': //CLEAR EVERYTHING
            clear()
        break;

        case 'Backspace': //DELETE ONE ITEM
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

         case '.':  //DOT DECIMALS
          break;
    }

        //SECOND NUMBER
        if(operator!=='' && event.key!== '+' && event.key!== '*' && event.key!== '/' && event.key!== 'x' && event.key!== '-' && event.key!== 'Backspace'){ 
            secondNumber += event.key
            console.log(`The second number is ${secondNumber}`, typeof secondNumber)
            displayEl.textContent += event.key
        }

    
})





