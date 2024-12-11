import { NavLink as Link } from "react-router-dom"

export function Header(){
    return <nav className="Header fixed flex justify-center items-center bg-blue-400 p-4 w-full">
        <Link className='mr-4 hover:text-white' to='/'>Home</Link>
        <Link className='mr-4 hover:text-white' to='/about'>About</Link>
        <Link className='mr-4 hover:text-white' to='/contact'>Contact</Link>
    </nav>
}