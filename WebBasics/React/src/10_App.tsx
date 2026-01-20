import React from 'react'
import Button from './components/10_UeUseStateEffect/Button'

type Props = {}

export default function App({}: Props) {
  return (
    <div>
      <div>Übung UseState & UseEffect</div>
      <Button title={'test'} importance={5}></Button>
      <Button title={'test2'} importance={10}></Button>
    </div>
  )
}