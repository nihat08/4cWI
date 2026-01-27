import { useEffect, useState } from 'react';

type Props = {

}

export default function ToDo({}: Props) {
    const [, setToDos] = useState([]);
        const [, setFilterToDos] = useState([]);
    
        useEffect(() => {
                fetch("https://jsonplaceholder.typicode.com/todos")
                    .then(res => res.json())
                    .then((json) => {
                        setToDos(json);
                        setFilterToDos(json);
                    });
            }, []);
    return (
        <div></div>
    )
}