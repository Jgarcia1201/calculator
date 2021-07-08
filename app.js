// *** VARIABLES***
let total = 0;
let displayTotal = ""; 
let current = ""; 
let alarm = document.createElement('div');  

// ***SELECTORS***

// Display 
const container = document.querySelector('#container'); 
const scrn = document.querySelector('.displayBox'); 
const currentNum = scrn.querySelector('.display');
const answer = scrn.querySelector('.result'); 

// Number Buttons 
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three'); 
const four = document.querySelector('#four'); 
const five = document.querySelector('#five'); 
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine'); 
const zero = document.querySelector('#zero'); 
const decimal = document.querySelector('#decimal'); 

// Clear All & Delete
const clearAll = document.querySelector('#clearAll'); 
const del = document.querySelector('#delete');

// Operator Buttons
const addition = document.querySelector('#add');
const subtraction = document.querySelector('#subtract'); 
const divide = document.querySelector('#divide'); 
const multiply = document.querySelector('#multiply'); 
const exponent = document.querySelector('#exponent'); 
const solve = document.querySelector('#equals'); 


// ***FUNCTIONS***

// Changing Display 
function display() {
    currentNum.innerHTML = displayTotal; 
}

function clear() {
    currentNum.innerHTML = "0";
    displayTotal = "";
    total = 0;  
    answer.innerHTML = ""; 
}

// ***EVENT LISTENERS***

// Clear & Delete
clearAll.addEventListener('click', clear);

del.addEventListener('click', () => {
    if (displayTotal != ""){
        displayTotal = displayTotal.substring(0, displayTotal.length - 1);
        display(); 
    }
    if (displayTotal == "") {
        currentNum.innerHTML = "0"; 
    }
}); 

// Numbers
one.addEventListener('click', () => {
    displayTotal = displayTotal + "1";
    display();
}); 

two.addEventListener('click', () => {
    displayTotal = displayTotal + "2";
    display(); 
});

three.addEventListener('click', () => {
    displayTotal = displayTotal + "3";
    display(); 
});

four.addEventListener('click', () => {
    displayTotal = displayTotal + "4";
    display(); 
});

five.addEventListener('click', () => {
    displayTotal = displayTotal + "5";
    display(); 
});

six.addEventListener('click', () => {
    displayTotal = displayTotal + "6";
    display(); 
});

seven.addEventListener('click', () => {
    displayTotal = displayTotal + "7";
    display(); 
});

eight.addEventListener('click', () => {
    displayTotal = displayTotal + "8";
    display(); 
});

nine.addEventListener('click', () => {
    displayTotal = displayTotal + "9";
    display(); 
});

zero.addEventListener('click', () => {
    displayTotal = displayTotal + "0";
    display(); 
});

decimal.addEventListener('click', () => {
    displayTotal = displayTotal + "."; 
    display(); 
});

// Operators
addition.addEventListener('click', () => {
    if (total == 0) {
        displayTotal = displayTotal + " + "; 
        display(); 
    }
    if (total != 0) {
        displayTotal = total.toString() + " + "; 
        display(); 
    }
});

subtraction.addEventListener('click', () => {
    if (total == 0) {
        displayTotal = displayTotal + " - "; 
        display(); 
    }
    if (total != 0) {
        displayTotal = total.toString() + " - "; 
        display(); 
    }
}); 

multiply.addEventListener('click', () => {
    if (total == 0) {
        displayTotal = displayTotal + " * "; 
        display(); 
    }
    if (total != 0) {
        displayTotal = total.toString() + " * "; 
        display(); 
    }

});

divide.addEventListener('click', () => {
    if (total == 0) {
        displayTotal = displayTotal + " / "; 
        display(); 
    }
    if (total != 0) {
        displayTotal = total.toString() + " / "; 
        display(); 
    }
});

exponent.addEventListener('click', () => {
    if (total == 0) {
        displayTotal = displayTotal + " ** "; 
        display(); 
    }
    if (total != 0) {
        displayTotal = total.toString() + " ** "; 
        display(); 
    }
})

solve.addEventListener('click', () => {
        total = eval(displayTotal); 
        answer.innerHTML = total;
        displayTotal = ""; 
});