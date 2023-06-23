const { log } = require('console');
const { Circle, Triangle, Square } = require('./shapes');
const { writeFile } = require('fs');

const genLogo = ({text,color,shape,shapeColor}) => {

  let logo;
  if(shape == "Circle") logo = new Circle(text,color,shapeColor); 
  if(shape == "Triangle") logo = new Triangle(text,color,shapeColor); 
  if(shape == "Square") logo = new Square(text,color,shapeColor); 

  writeFile('./dist/Logo.svg', logo.render(), err => {
    if(err) console.log(err);

    console.log('A new logo is created in the "dist" folder with the name Logo.svg!!!');
  })
};

module.exports = genLogo;