export interface Shape {
  getArea(): number;
}

export class Circle implements Shape {
  // Is local state
  private radius: number;
  // State initialize
  constructor(radius: number) {
    this.radius = radius;
  }
  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}

export class Rectangle implements Shape {
  private width: number;
  private height: number;
  // It also state initializer
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    return this.width * this.height;
  }
}
