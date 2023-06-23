const { Triangle } = require("./shapes");

let shape = new Triangle("ABC", "white", "yellow");

shape.setShapeColor("blue");

let output = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon fill="${shape.shapeColor}" points="50,200 150,0 300,200" />
      <text x="100" y="150" fill="${shape.color}" font-size="55">${shape.text}</text> 
    </svg>`;

test("Testing the render method from the Circle class", () => {
  expect(shape.render()).toBe(output);
});
