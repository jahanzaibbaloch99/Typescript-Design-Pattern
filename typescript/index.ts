interface Shape {
  area(): number;
  perimeter(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(private height: number, private width: number) {}

  area(): number {
    return this.width * this.height;
  }
  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

function calculateTotalArea(shape: Shape): number {
  return shape.area();
}

let circle = new Circle(4);
let rectangle = new Rectangle(4, 5);

console.log("Total Area Of Circle", calculateTotalArea(circle));
console.log("Total Area Of Rectangle", calculateTotalArea(rectangle));
