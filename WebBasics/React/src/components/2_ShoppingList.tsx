type Props = {
  itemName:string;
}

export default function ShoppingList({itemName}: Props) {
  return (
    <div className="border bg-blue-400 p-4 cursor-pointer">
        <p>{itemName}</p>
    </div>
  )
};