import { Link } from 'react-router'
import ShoppingList from '../Basics/2_ShoppingList'

type Props = {}

export default function Page1({}: Props) {
  const person ={firstname: 'Nihat', lastname: 'Test'}
  return (
    
    <div>

      <div className='bg-red-400 p-4 mt-4 h-60 w-full'>
        <ShoppingList itemName={'aaa'}/>
        <ShoppingList itemName={'aaa'}/>
        <ShoppingList itemName={'aaa'}/>      
      </div>

      <div className=' bg-green-500 w-30 h-10 mt-4 text-center rounded-2xl hover:bg-green-300'>
        <Link
        to="/p2"
        state={{person:person, title:'test'}}
        >Nächste Seite
        </Link>;
      </div>
    
    </div>


  )
}