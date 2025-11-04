import Card from './components/1_Card';
import Button from './components/2_Button';
import ShoppingList from './components/2_ShoppingList';
import ImageCard from './components/2_Card';
import Container from './components/3_Cards';
import Cards from './components/3_Cards';



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
  <div className="ml-10 gap-2">
    <Button title='Sendar'/>
    <Button title='Button'/>
  </div>

  <h3 className="m-2 font-bold">Card</h3>
  <div className="m-4">
    <ImageCard title="" description="" />
  </div>

  <h2 className="bg-red-400 w-80 m-2 p-2 flex justify-center font-bold">3_Cards&Data</h2>
  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 m-2">
    <Cards fullName='xxx yyy' description='xxx yyy zzz' image={`https://picsum.photos/200?radnom=${Math.random()}`}/>
    <Cards fullName='xxx yyy' description='xxx yyy zzz' image={`https://picsum.photos/200?radnom=${Math.random()}`}/>
    <Cards fullName='xxx yyy' description='xxx yyy zzz' image={`https://picsum.photos/200?radnom=${Math.random()}`}/>
    <Cards fullName='xxx yyy' description='xxx yyy zzz' image={`https://picsum.photos/200?radnom=${Math.random()}`}/>
    <Cards fullName='xxx yyy' description='xxx yyy zzz' image={`https://picsum.photos/200?radnom=${Math.random()}`}/>
    <Cards fullName='xxx yyy' description='xxx yyy zzz' image={`https://picsum.photos/200?radnom=${Math.random()}`}/>
    <Cards fullName='xxx yyy' description='xxx yyy zzz' image={`https://picsum.photos/200?radnom=${Math.random()}`}/>
    <Cards fullName='xxx yyy' description='xxx yyy zzz' image={`https://picsum.photos/200?radnom=${Math.random()}`}/>
    <Cards fullName='xxx yyy' description='xxx yyy zzz' image={`https://picsum.photos/200?radnom=${Math.random()}`}/>
  </div>

</div>;
}


