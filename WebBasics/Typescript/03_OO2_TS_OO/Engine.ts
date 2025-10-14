//Baue eine Engine mit Hersteller, Horsepower und Kraftstoff
//Füge einen Besitzer mit Vorname, Nachname und Alter dazu

export class Engine{
    constructor(private brand:string, private Hp:number, private fuel:string){}

  getHp() {
    return this.Hp;
  }
  getBrand(){
    return this.brand;
  }
  getFuel() {
    return this.fuel;
  }

}
