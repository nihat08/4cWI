import React, { useEffect, useState } from 'react'
import ToDoCard from './8_ToDoCard'
import type { Todo } from '../../utils/types';

type Props = {
    search:string;
}

export default function ToDoList({search}: Props) {
    const [ToDos, setToDos] = useState([]);
    const [filteredToDos, setFilteredToDos] = useState([]);
        
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then((json) => {
                setToDos(json);
                setFilteredToDos(json);
                });
    }, []);

    useEffect(()=>{
        let result = ToDos.filter((todo:Todo) => todo.title.includes(search))
        setFilteredToDos(result);
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
    