export class Car {
  // Kapselung
  private color: string = "";

  constructor(color: string) {
    this.color = color;
  }

  getColor(): string {
    return this.color;
  }

  setColor(color: string): void {
    // if....
    this.color = color;
  }
}