import { Link } from 'react-router-dom';
import '../styles/animations.css';
import { useEffect, useState } from 'react';

const NavBar = () => {
    const [isShrunk, setShrunk] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setShrunk((isShrunk) => {
                if(!isShrunk &&
                    (document.body.scrollTop > 50 ||
                        document.documentElement.scrollTop > 50)
                        ){return true;}

                        if(isShrunk && 
                            document.body.scrollTop < 4 &&
                            document.documentElement.scrollTop < 4)
                            {return false}

                            console.log(isShrunk);
                            return isShrunk;
            })
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return ( 
        <nav className={`scrollis${isShrunk.toString()}`}>
            <h1>V S V</h1>
            <div className='stroke'>
                <Link to="/">Hem</Link>
                <Link to="/projekt">Projekt</Link>
                <Link to="/omOss">Om Oss</Link>
            </div>
        </nav>
    );
}

export default NavBar;