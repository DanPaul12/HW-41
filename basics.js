let studentName = "Alice";
let studentAge = 15;
let studentGrade = 10;
let isPresent = true;

console.log(`Student name: ${studentName}`)
console.log(`Student age: ${studentAge}`)
console.log(`Student grade: ${studentGrade}`)
console.log(`Student present: ${isPresent}`)

let x = 1
let y = 2

console.log("Sum:",x + y);
console.log("Difference:", x - y);
console.log("Product:", x * y);
console.log("Quotient:", x / y);

x = 2 
y = 3

console.log("Updated num1:", x);
console.log("Updated num2:", y);

let equalto = x == y

console.log("Is num1 equal to num2?", equalto);
console.log("Is num1 greater than num2?", x > y);
console.log("Is num1 not equal to num2?", x !== y);

let isPositive = x>0 && y>0;
let isEven = x%2 == 0 || y%2 == 0;
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);