// code start.
setTimeout(() => {
document.getElementById('history').classList.add("dn");
document.getElementById('clearhistory').classList.add("dn");
},100)
let nikhil = document.getElementById('answer');

//important variables for calculator.
let calculator = "";
let display = document.getElementById("display");
let A = document.querySelector('.btn');
let history = document.getElementById('history');
let z = "";
document.getElementById('history').classList.remove("dn");
let vishu = document.getElementById('answer');
// Functions for calculator 
//1
function append(x, y) {
    display.value += x;
    z += x;
    calculator += `${y}`;
}
// 2
function c() {
  display.value = "";
  calculator = "";
  document.getElementById('answer').innerHTML = "";
  z = '';
}
// 3
function e() {
  try {
    if (calculator != "") {
    // display.value = eval(display.value);
    document.getElementById('answer').innerHTML = eval(calculator);
    history.innerHTML += `${z}<br>`;
    history.innerHTML += `=${eval(calculator)}<br><br>`;
  }
    
  }
  catch (error) {
    display.value = 'Error';
    calculator = "Error";
    vishu.innerHTML = "Error";
  }
}
// 4
function deleteOne() {
  let currentDisplay = display.value;
  display.value = currentDisplay.slice(0, -1);
  calculator = calculator.toString().slice(0, -1);
  calculator = calculator.replace("/100*", "");
  display.value = display.value.replace("%×","");
  z = z.replace("%×","");
  document.getElementById('answer').innerHTML = "";
  z = z.toString().slice(0, -1)
}

// 5
function square() {
    calculator = calculator * calculator;
    display.value += '²';
  }
  
//6
function showh() {
    document.getElementById('history').classList.toggle("dn");
    document.getElementById('clearhistory').classList.toggle("dn");
  }
//7
function clearhistory() {
    document.getElementById('history').innerHTML = '';
    history.classList.add('dn');
    document.getElementById('clearhistory').classList.add('dn');
  }

//8
function customRoot() {
  calculator = calculator * calculator;
  display.value = calculator;
}


//9
function p() {
  calculator += "/100*";
    z += "%×";
  display.value += '%×';
}

//code end