var a = 1;
var b = 3;
var c = a + b;

// assigmnent
a = 4;

// addition
a = a + 3;
a += 1;

// subtraction
b = 4 - 3;
b -= 1;

// multiplication
c = 3 * 9;
c *= 3;

// division
c = 10 / 2;
c /= 1;

// String operators
var txt1 = "Text 1";
var txt2 = "Text 2";
var txt3 = txt1 + " " + txt2;

// comparison operators
if (5 > 1) {
  console.log("5 is bigger than 1");
}

if (1 < 4) {
  console.log("1 is less than 4");
}

if (1 >= 0) {
  console.log("1 is bigger than or equal to 0");
}

if (1 <= 6) {
  console.log("1 is less than or equal to 6");
}

var x = (2 > 1) ? 1 : 0;

// logical operators (AND, OR, NOT)
var x = !true;
if (1 >= 0 && true) {
  //
}

if (true || 1 <= 10) {
  //
}


// type operators
var x = "String";
var variableType = typeof x;

if (x instanceof String) {
  console.log("x is of type String");
}
