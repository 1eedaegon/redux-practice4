export interface Shape {
  getArea(): number;
}

export class Circle implements Shape {
  // State initialize
  constructor(private radius: number) {
    this.radius = radius;
  }
  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}

export class Rectangle implements Shape {
  // It also state initializer
  constructor(public width: number, public height: number) {
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    return this.width * this.height;
  }
}
