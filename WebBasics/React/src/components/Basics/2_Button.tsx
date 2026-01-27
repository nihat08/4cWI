import { useState } from "react";

type Props = {
    title:string;
}

export default function Button({title}: Props) {
    const [amountOfClicks, setAmountOfClicks] = useState(0);
  
  return (
    <div className={'m-2 w-45 text-white hover:bg-green-400 bg-green-600 cursor-pointer p-3 ${style}'} onClick={()=>{
      setAmountOfClicks(amountOfClicks+1)
}}>
        <p>{title}</p>
        <div>Amount of Clicks: {amountOfClicks}</div>
    </div>
  )
}