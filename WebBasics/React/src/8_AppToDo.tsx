import { useState } from "react";
import ToDoCard from "./components/FilterToDo/8_ToDoCard";
import ToDoList from "./components/FilterToDo/8_ToDoList";

export default function App() {

    //Durch UseState werden Daten gemerkt. Wenn sich der Wert ändert, wird die Komponente neu gerendert
    const [searchValue, setSearchValue] = useState("");
    return (
    <div>
        <h1 className="bg-red-500 w-30 border m-4 p-2">8_ToDo</h1>
        <div className="m-4">
          <input 
            className="p-2 border" 
            type="text" 
            onChange={(e)=>setSearchValue(e.target.value)}
            value={searchValue} 
            placeholder="search..."/>   
        </div>
        <ToDoList search={searchValue}/>
        
    </div>

    )
}