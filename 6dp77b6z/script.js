let first_number = "0"; // Start as strings
let second_number = "0";
let funcornot = false;
let func;

let ans = document.getElementById("ans");

function digitadd(num) {    
    if (funcornot == false) {
        // If it's just '0', replace it; otherwise, append the number
        first_number = (first_number === "0") ? String(num) : first_number + num;
        ans.innerHTML = first_number;
    } else {
        second_number = (second_number === "0") ? String(num) : second_number + num;
        ans.innerHTML = second_number;
    }
}

function decimaladd() {    
    if (funcornot == false) {
        // Only add a dot if there isn't one already
        if (!first_number.includes(".")) {
            first_number += ".";
            ans.innerHTML = first_number;
        }
    } else {
        if (!second_number.includes(".")) {
            second_number += ".";
            ans.innerHTML = second_number;
        }
    }
}

function functrans(sign) {
    // If the user clicks an operator, we switch to the second number
    funcornot = true;
    func = sign;
    // We clear the display so the user knows they are typing the next number
    ans.innerHTML = "";
}

function enter() {
    if (funcornot == true) {
        // Convert strings to actual numbers for the math
        let n1 = parseFloat(first_number);
        let n2 = parseFloat(second_number);
        let result = 0;

        if (func == 'plus') result = n1 + n2;
        if (func == 'minus') result = n1 - n2;
        if (func == 'divide') result = n1 / n2;
        if (func == 'multi') result = n1 * n2;

        ans.innerHTML = result;
        
        // Save the result back as a string so we can keep working with it
        first_number = String(result);
        second_number = "0";
        funcornot = false;
    }
}

function erase() {
    first_number = "0";
    second_number = "0";
    funcornot = false;
    ans.innerHTML = "0";
}

function cancel() {
    funcornot = false;
    second_number = "0";
    ans.innerHTML = first_number;
}