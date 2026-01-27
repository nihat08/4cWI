import { useEffect, useState } from 'react';
import type { Todo } from '../../utils/types';
import ToDoCard from './8_ToDoCard';

type Props = { //Props sind die daten die von aussen in die Komponente reinkommen
    search:string; //Suchbegriff
} 

export default function ToDoList({search}: Props) {
    const [ToDos, setToDos] = useState([]);
    const [filteredToDos, setFilteredToDos] = useState([]); 
        
    //App bekommt Daten von API
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos") //fetch holt daten von api
            .then(res => res.json()) //res = response = antwort von api
            .then((json) => { //json = daten von api
                setToDos(json); //set: aktualiesiert in App
                setFilteredToDos(json); //set: aktualiesiert in App
                });
    }, []); //Dependency Array leer = nur einmal beim ersten rendern ausführen
            //Dependency Array mit variablen = bei änderung der variable ausführen

    

    //UseEffect für suchen
    useEffect(()=>{ 
        let result = ToDos.filter((todo:Todo) => todo.title.includes(search)) //filtert die todos nach dem suchbegriff
        setFilteredToDos(result); //set: aktualiesiert in App
    },[search]); //Dependency Array mit suchbegriff = bei änderung des suchbegriffes ausführen


    return (
        <div className="grid grid-cols-5 "> 
            {filteredToDos.map((todo: Todo) => ( //map: geht durch jedes element im array
                <ToDoCard 
                    id={todo.id}
                    completed={todo.completed} 
                    title={todo.title} 
                    key={todo.id} 

                    
                />
            ))}
        </div>
    );
}
    