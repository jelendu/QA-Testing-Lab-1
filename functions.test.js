const functions = require("./functions");

//test for 'returnTwo'
test("returnTwo function should return 2", () => {
  expect(functions.returnTwo()).toBe(2);
});

//tests for 'greeting'
test("greeting function should return 'Hello, James.'", () => {
  expect(functions.greeting("James")).toBe("Hello, James.");
});

test("greeting function should return 'Hello, Jill.'", () => {
  expect(functions.greeting("Jill")).toBe("Hello, Jill.");
});

//tests for 'add'
test("add function should return the sum of 1 and 2, which is 3", () => {
  expect(functions.add(1, 2)).toBe(3);
});

test("add function should return the sum of 5 and 9, which is 14", () => {
  expect(functions.add(5, 9)).toBe(14);
});



describe('Math functions', () => {

//tests for 'multiply'
test("multiply function should return the multiplication of 2 and 2, which is 4", () => {
  expect(functions.multiply(2, 2)).toBe(4);
});

test("multiply function should return the multiplication of 2 and 7, which is 14", () => {
  expect(functions.multiply(2, 7)).toBe(14);
});


//tests for 'divide'
test("divide function should return the division of 2 from 12, which is 6", () => {
  expect(functions.divide(12, 2)).toBe(6);
});

test("divide function should return the division of 7 from 14, which is 2", () => {
  expect(functions.divide(14, 7)).toBe(2);
});


//tests for 'subtract'
test("subtract function should return the subtraction of 2 from 12, which is 10", () => {
  expect(functions.subtract(12, 2)).toBe(10);
});

test("subtract function should return the subtraction of 7 from 14, which is 7", () => {
  expect(functions.subtract(14, 7)).toBe(7);
});

})