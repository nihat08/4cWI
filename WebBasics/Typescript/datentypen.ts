
interface Person{
    firstname:string;
    lastname:string;
    age: number;
    isMale?: boolean;
}


const person:Person ={
    firstname:"Hans",
    lastname:"Müller",
    age: 70,
};

function printName(person:Person){
    console.log(person.age);
}

printName(person);