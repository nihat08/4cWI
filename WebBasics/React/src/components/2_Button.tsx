type Props = {
    title:string;
}

export default function Button({title}: Props) {
  return (
    <div className="text-white justify-self-center ">
        <p>{title}</p>
    </div>
  )
}