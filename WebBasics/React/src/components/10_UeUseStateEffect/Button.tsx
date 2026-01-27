import { useState } from 'react';

type Props = {
    importance:number,

}

export default function Button({importance}: Props) {
    const [amountOfClicks, setAmountoufClicks] = useState(0);
  return (
    <div style={{border: importance > 5 ? '2px solid red' : '2px solid green', padding: '10px', margin: '10px'}}>
      <button onClick={() => setAmountoufClicks(amountOfClicks + 1)}>Click me</button>
      <div>{amountOfClicks}</div>
    </div>
  )
}