const { Circle } = require("./shapes");

let shape = new Circle("ABC", "white", "yellow");

shape.setShapeColor("blue");

// shape.setColor("blue");

let output = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle fill="${shape.shapeColor}" cx="150" cy="100" r="100" />
          <text x="100" y="120" fill="${shape.color}" font-size="75">${shape.text}</text> 
      </svg>`;

test("Testing the render method from the Circle class", () => {
  expect(shape.render()).toBe(output);
});