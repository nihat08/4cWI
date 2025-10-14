//Baue eine Engine mit Hersteller, Horsepower und Kraftstoff
//Füge einen Besitzer mit Vorname, Nachname und Alter dazu

export class Owner{
constructor(private firstName:string, private lastName:string, private age:number){}


getFirst(){
    return this.firstName;
}
getLast(){
    return this.lastName;
}
getAge(){
    return this.age;
}
}