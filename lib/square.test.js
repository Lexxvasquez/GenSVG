const { Square } = require("./shapes");

let shape = new Square("ABC", "white", "yellow");

shape.setShapeColor("blue");

let output = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect fill="${shape.shapeColor}" width="200" height="200"/>
          <text x="20" y="120" fill="${shape.color}" font-size="75">${shape.text}</text> 
      </svg>`;

test("Testing the render method from the Circle class", () => {
  expect(shape.render()).toBe(output);
});