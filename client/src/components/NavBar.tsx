import { NavLink } from 'react-router-dom'
import { Button } from './iu'
import { useAuth } from '../auth/AuthProvider'

function NavBar (): JSX.Element {
  const { logout } = useAuth()

  return (
    <nav className='bg-blue-200 py-3'>
      <ul className='flex items-center justify-around'>
        <li className='flex'>
          <img src="/gane.webp" alt="logo de gane" className='w-[70px]' />
        </li>
        <div className='flex gap-4'>
          <li>
            <NavLink to='/home' className='font-semibold hover:text-rose-600'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/example1' className='font-semibold hover:text-rose-600'>Example 1</NavLink>
          </li>
          <li>
            <NavLink to='/example2' className='font-semibold hover:text-rose-600'>Example 2</NavLink>
          </li>
          <li>
            <NavLink to='/example3' className='font-semibold hover:text-rose-600'>Example 3</NavLink>
          </li>
        </div>
        <li>
          <Button onClick={logout}>Cerrar Sesión</Button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
