module.exports = [
  {
    type:"input",
    name:`text`,
    message:`what are the three letters for the SVG Logo?`,
    default: 'ABC'
  },
  {
    type:"input",
    name:`color`,
    message:`what is the color for the letters?`,
    default:'black'
  },
  {
    type:"list",
    name:`shape`,
    message:`what is the shape for the logo?`,
    choices: ['Circle','Triangle','Square'],
    default:'Circle'
  },
  {
    type:"input",
    name:`shapeColor`,
    message:`what is the color of the shape?`,
    default:'red'
  },
];