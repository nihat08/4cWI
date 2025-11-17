import { useState } from "react";

type Props = {
  title: string;
};

export default function Counter({ title }: Props) {
  const [amountOfClicks, setAmountOfClicks] = useState(0);
    let style = amountOfClicks > 5 ? "bg-blue-600" : "";

  return (
    <div className={`m-2 w-80 text-black bg-blue-300 p-3 border${style}`}>
      <p>{title}</p>
      <div className="flex items-center gap-3 mt-3">
        <button
          className="h-15 w-15 border rounded hover:bg-green-500"
          onClick={() => setAmountOfClicks(amountOfClicks + 1)}>+</button>
        <div>Amount of Clicks: {amountOfClicks}</div>
        <button
          className="h-15 w-15 border rounded hover:bg-red-500"
          onClick={() =>
            setAmountOfClicks(amountOfClicks - 1)}>-</button>
      </div>
    </div>
  );
}
