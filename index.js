const dislpay = document.getElementById("display");
const expressionDisplay = document.getElementById("expression");

let currExp = "";
let lastInputisOperator = false;


document.addEventListener("keydown",(event) => {
    const key = event.key;
    if(!isNaN(key) || key === "."){
        appendnumber(key);
    } else if(['+','-','*','/','%'].includes(key)){
        appendOperator(key);
    } else if(key === "="){
        calculate();
    } else if(key === "Backspace" || key === "DEL"){
        deletelast();
    } else if(key === "AC"){
        clearDisplay();
    }
} );

function appendnumber(key){
    // if last input was operator, clear the main display
    if(lastInputisOperator){
        dislpay.value = "";
        lastInputisOperator = false;
    }

    dislpay.value += key;
}

function appendOperator(key){
    if(dislpay.value === '' || currExp === '') return;

    currExp = dislpay.value;
    expressionDisplay += currExp + ' ' + `${key}`;
}