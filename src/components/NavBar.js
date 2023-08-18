import '../styles/NavBar.css';
import {Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav className="NavBar title">
            <h1>VirkSchuVik</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/create">Nytt</Link>
                <Link to="/omOss">Om Oss</Link>
            </div>
        </nav>
    );
}

export default NavBar;