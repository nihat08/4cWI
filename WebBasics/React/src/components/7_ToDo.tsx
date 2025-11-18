import React from 'react'

type Props = {
    title:string;
    completed:boolean;
}

export default function ToDo({title, completed}: Props) {
  return (
    <div className="border gap-2 p-4 m-2">
        <div>{title}</div>
        <div>{completed}</div>
    </div>
  )
}