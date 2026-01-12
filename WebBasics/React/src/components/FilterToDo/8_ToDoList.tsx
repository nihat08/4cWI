import React, { useEffect, useState } from 'react'
import ToDoCard from './8_ToDoCard'
import type { Todo } from '../../utils/types';

type Props = {
    search:string;
}

export default function ToDoList({search}: Props) {
    const [ToDos, setToDos] = useState([]);
    const [filteredToDos, setFilteredToDos] = useState([]);
        
    //App bekommt Daten von API
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos") //fetch holt daten von api
            .then(res => res.json())
            .then((json) => {
                setToDos(json);
                setFilteredToDos(json);
                });
    }, []); //Dependency Array leer = nur einmal beim ersten rendern ausführen

    //Live Filter
    useEffect(()=>{
        let result = ToDos.filter((todo:Todo) => todo.title.includes(search)) //filtert die ToDos nach dem Suchbegriff
        setFilteredToDos(result); //set: aktualiesiert in App
    },[search]);


    return (
        <div className="grid grid-cols-5 ">
            {filteredToDos.map((todo: Todo) => (
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
    