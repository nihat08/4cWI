import Card from './components/1_Card';
import Button from './components/2_Button';
import ShoppingList from './components/2_ShoppingList';


export default function App() {
  return <div>
  <h1 className="bg-red-400 w-80 m-2 p-2 flex justify-center font-bold">1_Card_Tutorial</h1>
  <div className="grid grid-cols-2 w-80 gap-4 m-2 ">
    <Card title="Hans" desripton="Meister"/>
    <Card title="Pete" desripton="Azubi"/>
    <Card title="Meat" desripton="Alias"/>
    <Card title="Lause" desripton="Okay"/>
  </div>

  <h2 className="bg-red-400 w-80 m-2 p-2 flex justify-center font-bold">2_Components</h2>
  <h3 className="m-2 font-bold">Liste</h3>
  <div className="grid grid-cols-1 w-80 gap-0.5 m-2">
    <ShoppingList itemName="Coffee"/>
    <ShoppingList itemName="Tea"/>
    <ShoppingList itemName="Beer"/>
  </div>

  <h3 className="m-2 font-bold">Button</h3>
  <div className="flex items-center justify-center ml-25 hover:bg-green-400 bg-green-600 w-30 h-10 m-2 cursor-pointer  ">
    <Button title='Sendar'/>
  </div>



  </div>;
}


