alert("hello world!");
console.log("HELLO!!!!");

function addNumbers(){
  num1 = document.getElementById("num1").value;

  num2 = document.getElementById("num2").value;
  document.getElementById("result").innerHTML = parseInt(num1) + parseInt(num2);
  console.log("result")
}

function changeText() {
  document.getElementById("test").innerHTML = "Justin";
}

function openDoor(doorNumber) {
  if (doorNumber === 1) {
    return "1,000 Dollars";
  } else if (doorNumber === 2) {
    return "10,000 Dollars";
  } else if (doorNumber === 3) {
    return "1,000,000 Dollars";
  } else {
    return "Not a valid doorNumber";
  }
}

var age = 10;

if (age < 10) {
  alert("You are less than 10");
} else {
  alert("You are greater than 10");
}

var names = ["jon", "jeff", "pat"]; 

for (var i = 0; i < names.length; i++) {
	console.log(names[i] + " is my friend");
}

function doSomeMath(num1, num2, num3, num4) {
  return num1 * num2 + num3 - num4;
}

var result = doSomeMath(-5, 13, 2100, 10);
console.log(result);

