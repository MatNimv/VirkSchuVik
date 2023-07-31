import '../styles/NavBar.css';

const NavBar = () => {
    return ( 
        <nav className="NavBar title">
            <h1>VirkSchuVik</h1>
            <div>
                <a href="/">Home</a>
                <a href="/create">Nytt</a>
            </div>
        </nav>
    );
}

export default NavBar;