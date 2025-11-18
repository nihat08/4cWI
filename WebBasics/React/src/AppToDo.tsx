import { useEffect, useState } from "react";
import ToDo from "./components/7_ToDo";

interface TodoItem {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}

export default function App() {
    const [todos, setTodos] = useState<TodoItem[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then((json: TodoItem[]) => setTodos(json));
    }, []);

    console.log(todos);

    return (
        <div>
            <h1 className="bg-red-400 w-80 m-2 p-2 flex justify-center font-bold">
                7_ToDo
            </h1>
            {todos.map((todo: TodoItem) => (
                <ToDo key={todo.id} title={todo.title} completed={todo.completed} />
            ))}
        </div>
    );
}
