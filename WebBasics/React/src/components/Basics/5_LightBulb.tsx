import image from "../assets/LightBulb.png";


type Props = {}

export default function LightBulb({}: Props) {
  return (
    <img src={image}
    className="h-20 w-20"
    />
  )
}