import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-purple-100 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
             <h1 className='font-bold text'>
            <span className='text-purple-400'>Near </span>
            <span className='text-purple-600'>Sanskrit</span>
        </h1>
            </Link>
            
        <form className='bg-purple-50 p-3 rounded-lg flex items-center'>
            <input type='text' placeholder='search..' className='bg-transparent focus:outline-none w-24 sm:w-64' />
            <FaSearch className='text-purple-700'/>
        </form>
        <ul className='flex gap-4'>
            <Link to='/'>
            <li className='hidden sm:inline text-purple-500 hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
             <li className='hidden sm:inline text-purple-500 hover:underline'>About</li>
            </Link>
            <Link to='/signin'>
             <li className='text-purple-500 hover:underline'>Sign In</li>
            </Link>
       
        </ul>
        </div>
       
    </header>
  )
}
