type Props = {
    title:string;
    desripton:string;
}

export default function Card({title, desripton}: Props) {
  return (
    <div className="border bg-blue-400 p-2">
        <h2>{title}</h2>
        <p>{desripton}</p>
    </div>
  
)
};
