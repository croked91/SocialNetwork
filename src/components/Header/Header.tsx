import { Link } from 'react-router-dom'
import './Header.css'



const Header = () => {
    return <header className='header'>
        <Link to="/">
        <img src='./logo192.png' alt=''/>
        </Link>
    </header>
}

export default Header;