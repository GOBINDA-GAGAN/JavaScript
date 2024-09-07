// Arithmetic Operators
let a = 10;
let b = 5;
console.log("Arithmetic Operators:");
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus

// Assignment Operators
console.log("\nAssignment Operators:");
let x = 10;
console.log("x =", x); // Assignment
x += 5; // Addition assignment
console.log("x += 5 ->", x);
x -= 3; // Subtraction assignment
console.log("x -= 3 ->", x);
x *= 2; // Multiplication assignment
console.log("x *= 2 ->", x);
x /= 4; // Division assignment
console.log("x /= 4 ->", x);
x %= 3; // Modulus assignment
console.log("x %= 3 ->", x);

// Comparison Operators
console.log("\nComparison Operators:");
console.log("a == b:", a == b); // Equal to
console.log("a != b:", a != b); // Not equal to
console.log("a === b:", a === b); // Strict equal to
console.log("a !== b:", a !== b); // Strict not equal to
console.log("a > b:", a > b); // Greater than
console.log("a < b:", a < b); // Less than
console.log("a >= b:", a >= b); // Greater than or equal to
console.log("a <= b:", a <= b); // Less than or equal to

// Logical Operators
console.log("\nLogical Operators:");
let p = true;
let q = false;
console.log("p && q:", p && q); // Logical AND
console.log("p || q:", p || q); // Logical OR
console.log("!p:", !p); // Logical NOT

// Bitwise Operators
console.log("\nBitwise Operators:");
console.log("a & b:", a & b); // Bitwise AND
console.log("a | b:", a | b); // Bitwise OR
console.log("a ^ b:", a ^ b); // Bitwise XOR
console.log("~a:", ~a); // Bitwise NOT
console.log("a << 1:", a << 1); // Left Shift
console.log("a >> 1:", a >> 1); // Right Shift

// Ternary Operator
console.log("\nTernary Operator:");
let age = 20;
let isAdult = (age >= 18) ? "Yes" : "No";
console.log("Is age 20 an adult? ", isAdult);

// Type Operators
console.log("\nType Operators:");
console.log("typeof a:", typeof a); // typeof operator
console.log("[] instanceof Array:", [] instanceof Array); // instanceof operator

// Unary Operators
console.log("\nUnary Operators:");
let num = 10;
console.log("typeof num:", typeof num); // typeof operator
let obj = { key: "value" };
delete obj.key; // delete operator
console.log("delete obj.key:", obj); // obj is now {}

// Spread and Rest Operators
console.log("\nSpread and Rest Operators:");
let arr1 = [1, 2, 3];
let arr2 = [4, 5, ...arr1]; // Spread operator
console.log("arr2 with spread operator:", arr2);

function sumAll(...args) { // Rest operator
  return args.reduce((sum, curr) => sum + curr, 0);
}
console.log("sumAll(1, 2, 3, 4):", sumAll(1, 2, 3, 4));
