import Button from './components/10_UeUseStateEffect/Button'

type Props = {}

export default function App({}: Props) {
  return (
    <div>
      <div>Übung UseState & UseEffect</div>
      <Button importance={5}></Button>
      <Button importance={10}></Button>
    </div>
  )
}