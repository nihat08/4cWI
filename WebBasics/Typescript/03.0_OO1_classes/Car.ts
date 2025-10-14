import { Engine } from "./Engine";

export class Car{
private color:string = "red";

constructor(model:string, private make:string, private engine:Engine){
}

getColor():string{
    return this.color;
}

getMake():string{
    return this.make;
}

getPS():number{
    return this.engine.getPs();
}

}










