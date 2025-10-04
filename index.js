const dislpay = document.getElementById("display");
const expressionDisplay = document.getElementById("expression");

let currExp = "";
let lastInputisOperator = false;


document.addEventListener("keydown",(event) => {
    const key = event.key;
    if(!isNaN(key) || key === "."){
        
    }
} );

function appendnumber(key){
    // if last input was operator, clear the main display
    if(lastInputisOperator){
        dislpay.value = "";
        lastInputisOperator = false;
    }
}