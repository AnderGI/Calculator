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
let noManyDecimanls;

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
    if (b!==0){
    noManyDecimanls = Number(a)/Number(b)
    noManyDecimanls = noManyDecimanls.toFixed(2)
    console.log(`the result of the division is ${noManyDecimanls}`)
    console.log(typeof noManyDecimanls)
    displayEl.textContent = noManyDecimanls
}else{
    displayEl.textContent = `Nope. You can't divide by zero`
    console.log(`nope`)
}
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
            firstNumber += e.target.innerText
            console.log(`The first number is ${firstNumber}`) 
            console.log(typeof firstNumber)      
            displayEl.textContent += e.target.innerText
        }
        else{ 
            secondNumber += e.target.innerText
            console.log(`The second number is ${secondNumber}`)
            console.log(typeof secondNumber)
            displayEl.textContent += e.target.innerText
        }
        })
    })

}

display()

operandEl.forEach(item => {
    item.addEventListener('click', ()=>{
        console.log(`The operator is ${item.textContent}`)
        console.log(typeof item.textContent)
        operator = item.textContent
        displayEl.textContent = ''
        })
})

function equalResult (){
    operate(operator, firstNumber, secondNumber)
    result = displayEl.textContent
    console.log(`The result and the firs number of the next ecuation is ${result}`)
    console.log(typeof result)
    firstNumber = result 
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




deleteEl.addEventListener('click', ()=>{
    if(operator===''){
 firstNumber = firstNumber.slice(0, -1)
 displayEl.textContent= firstNumber
 console.log(`the first number ${firstNumber}`)
 console.log(typeof firstNumber)
 console.log(typeof displayEl.textContent)
    } else{

        secondNumber = secondNumber.slice(0, -1)
        displayEl.textContent= secondNumber
        console.log(`the first number ${secondNumber}`)
        console.log(typeof secondNumber)
        console.log(typeof displayEl.textContent)
    }

})

/*
window.addEventListener('keydown', function(e){
    const numSelec = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if (!numSelect) return ;
})

*/



