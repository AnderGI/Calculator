//SET MORE THAN TWO NUMBERS STRAIGHT
// DOT AS A WAY OF CREATING FLOATING NUMBERS

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

function add(a,b){
    console.log(Number(a)+Number(b))
    displayEl.textContent = Number(a)+Number(b) 
}
function subtract(a,b){
    console.log(Number(a)-Number(b))
    displayEl.textContent = Number(a)-Number(b) 
}
function multiply(a,b){
    console.log(Number(a)*Number(b))
    displayEl.textContent = Number(a)*Number(b) 
}
function divide(a,b){
    console.log(Number(a)/Number(b))
    displayEl.textContent = Number(a)/Number(b) 
}
function exponent(a,b){
    console.log(Number(a)**Number(b))
    displayEl.textContent = Number(a)**Number(b)  
}

function operate(operator, num1, num2){
    switch(operator) {
        case '+':
          add(num1,num2)
        break;

        case '-':
            subtract(num1,num2)
        break;
        case 'X':
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
            firstNumber = e.target.innerText
            console.log(firstNumber)       
            displayEl.textContent += e.target.innerText
        }else{ 
            secondNumber += e.target.innerText
            console.log(secondNumber)
            displayEl.textContent = e.target.innerText
            
        }
        })
    })

}

display()

operandEl.forEach(item => {
    item.addEventListener('click', ()=>{
        console.log(item.textContent)
        operator = item.textContent
        displayEl.textContent = operator
    })
})

function equalResult (){
    operate(operator, firstNumber, secondNumber)
    /*result = displayEl.textContent*/
    firstNumber = '' 
    secondNumber = ''
    operator = ''
   

}
equalEl.addEventListener('click',equalResult)

clearEl.addEventListener('click',()=>{
    displayEl.textContent = ''
    firstNumber = ''
    secondNumber = ''
   /* result = ''*/
    operator = ''
})

/*
window.addEventListener('keydown', function(e){
    const numSelec = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if (!numSelect) return ;
})

*/