

//1. Get HTML Collection of all buttons
let buttons = document.getElementsByTagName("button");

//2. Convertes HTML collection to Array
let buttonsArray = Array.from(buttons);

//3. Add 'click' event listner on all the buttons
buttonsArray.forEach((button) => {
  button.addEventListener("click", printNum);
});

// 4. Create a function which will be called by event listner
function printNum(event) {
  // 4.1 -> Get the button clicked by user eg. <button>C<button>
  let button = event.target;
  // 4.2 -> Get the innerHTML of the button  eg. C
  let newValue = button.innerHTML;

  // 4.3 -> Get the screen and update the new value
  let screen = document.getElementById("screen");

  //4.4 clear screen if button 'C' is clicked
  if (newValue === "C") {
    screen.value = "";
    return;
  }

if(newValue === "+-"){
    if (screen.value[0] === '0'){
        screen.value = screen.value.slice(1);
    }else{
        screen.value = "-" + screen.value;
    }
    return;
}

if ("+-*/" .includes(newValue)){
   let curValue = 
}


  // 4.5 evaluate answer if clicked on =
  if (newValue === "=") {
    let ans = 0;
    if (screen.value.includes("+")) {
      ans = performSum(screen.value);
    }
    else if(screen.value.includes("-")){
      ans=performSub(screen.value);
    }
    else if(screen.value.includes("*")){
      ans=performMul(screen.value);
    }
    else if (screen.value.includes("/")){
      ans=performDiv(screen.value);
    }

    screen.value = ans;
    return;
  }

  // screen.value = screen.value + newValue;
  screen.value += newValue;
}

// value = '1 0 0 + 2 0 0 0'
//          0 1 2 3 4 5 6 7
function performSum(value) {
  let plusIndex = value.indexOf("+");
  let num1 = value.slice(0, plusIndex);
  let num2 = value.slice(plusIndex + 1);
  let sum = Number(num1) + Number(num2);
  return sum;
}

function performSub(value) {
  let subIndex = value.indexOf("-");
  let num3 = value.slice(0, subIndex);
  let num4 = value.slice(subIndex + 1);
  let sub = Number(num3) - Number(num4);
  return sub;
}

function performMul(value) {
  let mulIndex = value.indexOf("*");
  let num5 = value.slice(0, mulIndex);
  let num6 = value.slice(mulIndex + 1);
  let mul = Number(num5) * Number(num6);
  return mul;
}

function performDiv(value) {
  let divIndex = value.indexOf("/");
  let num7 = value.slice(0,divIndex);
  let num8 = value.slice(divIndex + 1);
  let div = Number(num7) /Number(num8);
  if(num8 === '0'){
    let a = alert("Cannot divide by zero");
    return;
  }
  return div;
}
