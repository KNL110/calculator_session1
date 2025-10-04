const dislpay = document.getElementById("display");
const expressionDisplay = document.getElementById("expression");

let currExp = "";
let lastInputisOperator = false;


document.addEventListener("keydown",(event) => {
    const key = event.key;
    console.log(key);
    
    if(!isNaN(key) || key === "."){
        appendnumber(key);
    } else if(['+','-','*','/','%'].includes(key)){
        appendOperator(key);
    } else if(key === "="){
        calculate();
    } else if(key === "Backspace" || key === "DEL"){
        deletelast();
    } else if(key === "Escape"){
        clearDisplay();
    }
} );

function appendnumber(key){
    // if last input was operator, clear the main display
    if(lastInputisOperator){
        dislpay.innerHTML = "";
        lastInputisOperator = false;
    }

    currExp += key;
    dislpay.innerHTML += key;
}

function appendOperator(key){
    if(dislpay.innerHTML === '' || currExp === '') return;
    expressionDisplay.innerHTML = currExp + ' ' + `${key}`;
    currExp += key;
    dislpay.innerHTML = "";
}
   
function deletelast(){
    n = currExp.length;
    currExp = currExp.substring(0,n-1);
    dislpay.innerHTML = dislpay.innerHTML.slice(0,-1);
}

function clearDisplay(){
    dislpay.innerHTML = '';
    currExp = '';
    expressionDisplay.innerHTML = "";
    lastInputisOperator = false;
}

function calculate(){
    if(dislpay.innerHTML === '' || currExp === '') return;
    expressionDisplay.innerHTML = currExp + ' ' + '=';
    let result = eval(currExp);
    dislpay.innerHTML = result;
    currExp = result;
    lastInputisOperator = true;
}