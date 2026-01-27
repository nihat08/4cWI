import { Link, useLocation } from 'react-router';

type Props = {}

export default function Page2({}: Props) { 
  const location = useLocation();
  const person = location.state.person; 

  return (
    <div>
      
      <div className='bg-green-500 p-4'>
        <div>Hello {person.firstname}</div>
      </div>
      
      <div className=' bg-green-500 w-30 h-10 mt-4 text-center rounded-2xl hover:bg-green-300 border-black border-2'>
            <Link to="/">Vorherige Seite</Link> 
      </div>
    </div>
  )
}