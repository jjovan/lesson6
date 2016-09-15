var x = 10;
console.log(x + 20);

var codingIsCool = true;
console.log(codingIsCool);

var colors = ["red", "yellow", "blue"];

console.log(colors[0]);
console.log(colors[2]);
console.log(colors[3]);

var numbers = [1, 2, 300, 40, -50];

var colorsAndNumbers = [colors, numbers];

console.log(colorsAndNumbers[1][4]);
console.log(colorsAndNumbers[0][1]);

var smalltalk = {
  breed: "samoyed",
  age: 3,
  dob: "09/29/2012"
}

console.log(smalltalk["breed"]);
console.log(smalltalk.breed);
console.log(smalltalk.age);

var number1 = 10;
var number2 = -1;
var difference = number1 - number2;

console.log(difference);

var noun = "dog";
var verb = "ran";
var adverb = "fast";
var sentence = "the " + noun + " " + verb + " " + adverb;

console.log(sentence);
alert(sentence);

console.log("noun");
console.log(noun);

var me = {
  firstName: "shirmung",
  lastName: "bielefeld",
  dob: "aug 25th",
  interests: [5, "dogs", "sushi"]
}

console.log(me.dob);
console.log(me["dob"]);
console.log(me.interests[2]);

var age = 25;

if (age >= 21) {
  alert("welcome!");
} else {
  alert("whoops! you're too young!");
}

function addStuff(x, y) {
  return x + y;
}

var sum = addStuff(50, 200);
console.log(sum);

function getPhrase() {
  return "nonsense nonsense";
}

var phrase = getPhrase();
console.log(phrase);

function doSomeMath(num1, num2, num3, num4) {
  return num1 * num2 + num3 - num4;
}

var result = doSomeMath(-7, 13, 300, 41);
console.log(result);

function openDoor(doorNumber) {
  if (doorNumber === 1) {
    return "banana";
  } else if (doorNumber === 2) {
    return "a new car";
  } else if (doorNumber === 3) {
    return "a jar of pennies";
  } else {
    return "that's not a door number";
  }
}

console.log(openDoor(2));
console.log(openDoor(3));
console.log(openDoor("cat"));
