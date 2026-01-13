import React, { useState } from 'react'

type Props = {}

export default function LightSwitch({}: Props) {
    const [isClicked, setIsClicked] = useState(false);
    let style = isClicked ? "bg-yellow-500" : "bg-red-300";
  return (
    <div onClick={() => setIsClicked(!isClicked)}
    className={`p-0.5 w-20 h-20 cursor-pointer transition-colors border  ${style}`}>
        {isClicked ? "ON" : "OFF"}
    </div>
  )
}