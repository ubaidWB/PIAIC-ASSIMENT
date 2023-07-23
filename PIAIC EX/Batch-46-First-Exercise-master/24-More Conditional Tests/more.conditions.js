//Tests for equality and inequality with strings
var fruit = 'APPLE';
console.log('I predict True', fruit == 'APPLE', '\n');
console.log('I predict False', fruit != 'APPLE', '\n');
//• Tests using the lower case function
console.log('I predict True', fruit.toLocaleLowerCase() == 'apple', '\n');
console.log('I predict False', fruit.toLowerCase() != 'apple', '\n');
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log('I predict True', 5 == 5, '\n');
console.log('I predict False', 4 != 4, "\n");
console.log('i predict True', 4 < 5, '\n');
console.log('i predict False', 5 > 6, '\n');
console.log('I predict True', 10 >= 9, '\n');
console.log('I Predict Flase', 6 <= 5, '\n');
//• Tests using "and" and "or" operators
console.log('I predict True', true && false);
console.log('I predict False', false || true);
