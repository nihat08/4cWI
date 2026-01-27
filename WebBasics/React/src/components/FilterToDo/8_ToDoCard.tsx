
type Props = {
    title: string;
    id: number;
    completed:boolean
}

export default function ToDoCard({id, title, completed}: Props) {
  return (
    <div className={`border p-4 m-4 ${completed?"bg-green-200":"bg-red-200"}`}> // ? schaut ob completed true oder false ist
        <div>{id}</div>
        <div>{title}</div>
        <div>{completed? "done":"open"}</div>
    </div>
  )
}