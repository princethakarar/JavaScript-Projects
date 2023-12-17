let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let mul = document.getElementById("mul");
let div = document.getElementById("div");
let ans = document.getElementById("answer");
let clear = document.getElementById("clear");

let display = document.querySelector(".display");

// numbers

one.addEventListener("click", () => {
    display.value += 1;
});

two.addEventListener("click", () => {
    display.value += 2;
});

three.addEventListener("click", () => {
    display.value += 3;
});

four.addEventListener("click", () => {
    display.value += 4;
});

five.addEventListener("click", () => {
    display.value += 5;
});

six.addEventListener("click", () => {
    display.value += 6;
});

seven.addEventListener("click", () => {
    display.value += 7;
});

eight.addEventListener("click", () => {
    display.value += 8;
});

nine.addEventListener("click", () => {
    display.value += 9;
});


// operations

plus.addEventListener("click", () => {
    let temp = display.value;
    let temp2 = temp.charAt(temp.length-1);
    
    if(temp2 == '+' || temp2 == '-' || temp2 == '*' || temp2 == '/')
    {
        display.value = temp.substring(0,temp.length-1);
        display.value += '+';
    }
    else{
        display.value += '+';
    }
});

minus.addEventListener("click", () => {
    let temp = display.value;
    let temp2 = temp.charAt(temp.length-1);
    
    if(temp2 == '+' || temp2 == '-' || temp2 == '*' || temp2 == '/')
    {
        display.value = temp.substring(0,temp.length-1);
        display.value += '-';
    }
    else{
        display.value += '-';
    }
});

mul.addEventListener("click", () => {
    let temp = display.value;
    let temp2 = temp.charAt(temp.length-1);
    
    if(temp2 == '+' || temp2 == '-' || temp2 == '*' || temp2 == '/')
    {
        display.value = temp.substring(0,temp.length-1);
        display.value += '*';
    }
    else{
        display.value += '*';
    }
});

div.addEventListener("click", () => {
    let temp = display.value;
    let temp2 = temp.charAt(temp.length-1);
    
    if(temp2 == '+' || temp2 == '-' || temp2 == '*' || temp2 == '/')
    {
        display.value = temp.substring(0,temp.length-1);
        display.value += '/';
    }
    else{
        display.value += '/';
    }
});

clear.addEventListener("click", () => {
    display.value = '';
});

ans.addEventListener("click", () => {
    display.value = eval(display.value);
});