import Card from './components/Card';

export default function App() {
  return <div>
  <h1 className="bg-red-400 w-80 m-2 p-2 flex justify-center">Hoi</h1>
  <div className="grid grid-cols-2 w-80 gap-4 m-2 ">
    <Card title="Hans" desripton="Meister"/>
    <Card title="Pete" desripton="Azubi"/>
    <Card title="Meat" desripton="Alias"/>
    <Card title="Lause" desripton="Okay"/>
  </div>
  
  </div>;
}


