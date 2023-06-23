
class SVG {
  constructor(text,color,shapeColor) {
    this.text = text;
    this.color = color;
    this.shapeColor = shapeColor;
  }

  seText = text => this.text = text;
  setColor = color => this.color = color;
  setShapeColor = shapeColor => this.shapeColor = shapeColor;
};

class Circle extends SVG {
    constructor(text,color,shapeColor) {
      super(text,color,shapeColor);
    }

    setShapeColor = color => this.shapeColor = color;

    render = () =>`
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle fill="${this.shapeColor}" cx="150" cy="100" r="100" />
          <text x="75" y="120" fill="${this.color}" font-size="75">${this.text}</text> 
      </svg>`; 
};

class Triangle extends SVG {
    constructor(text,color,shapeColor) {
      super(text,color,shapeColor);
    }

    setShapeColor = color => this.shapeColor = color;

    render = () =>`
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon fill="${this.shapeColor}" points="50,200 150,0 300,200" />
      <text x="100" y="150" fill="${this.color}" font-size="55">${this.text}</text> 
    </svg>`;
};

class Square extends SVG {
    constructor(text,color,shapeColor) {
      super(text,color,shapeColor);
    }

    setShapeColor = color => this.shapeColor = color;

    render = () =>`
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect fill="${this.shapeColor}" width="200" height="200"/>
          <text x="20" y="120" fill="${this.color}" font-size="75">${this.text}</text> 
      </svg>`;
};





module.exports = { Circle, Triangle, Square };