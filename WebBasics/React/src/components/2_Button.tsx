import { useState } from "react";

type Props = {
    title:string;
}

export default function Button({title}: Props) {
    const [amountOfClicks, setAmountOfClicks] = useState(0);
    let style = amountOfClicks>5?"bg-blue-600":"";
  
  return (
    <div className={'w-45 text-white hover:bg-green-400 bg-green-600 cursor-pointer p-3 ${style}'} onClick={()=>{
      setAmountOfClicks(amountOfClicks+1)
}}>
        <p>{title}</p>
        <div>Amount of Clicks: {amountOfClicks}</div>
    </div>
  )
}