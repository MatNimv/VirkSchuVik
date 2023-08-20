import { Link } from 'react-router-dom';
import '../styles/animations.css';

const NavBar = () => {
    return ( 
        <nav>
            <h1>VirkSchuVik</h1>
            <div className='stroke'>
                <Link to="/">Hem</Link>
                <Link to="/create">Nytt</Link>
                <Link to="/omOss">Om Oss</Link>
            </div>
        </nav>
    );
}

export default NavBar;