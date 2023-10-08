import { Link } from 'react-router-dom';
import '../styles/animations.css';

import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import useWindowDimensions from '../functions/getWindowDimensions';

const NavBar = () => {
    const [isShrunk, setShrunk] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const currentUser = auth.currentUser;
    const { width } = useWindowDimensions();

    const [dropMenu, setDropMenu] = useState(false);
    const [sideMenu, setSideMenu] = useState(false);

    async function fetchUserName() {
        if(currentUser){
            const uid = currentUser.uid;

            try {
                const q = query(collection(db, "people"), where("id", "==", uid));
                const doc = await getDocs(q);
                const data = doc.docs[0].data();
                setName(data.fname);
            } catch (err) {
                alert("Ett fel uppstod när användardatan hämtades. Försök igen.");
            }
        }
    }

    function handleDropMenu(){
        setDropMenu(!dropMenu);
    }
    function handleSideMenu(){
        if (sideMenu === true){
            setSideMenu(false);
        } else {
            setSideMenu(true)
        }
    }

    //kolla om någon är inloggad eller ej
    if(currentUser){
        fetchUserName()
    } else {
        //inget
    }

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

                        return isShrunk;
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [user,loading]);

    if(width < 732){
        return ( 
            <div>
                <nav className={`mobile scrollis${isShrunk.toString()}mobile`}>
                    <h1>VSV</h1>
                    <div className='middlespace'></div>
                    <div className='hamburger' onClick={handleSideMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <div className={`sidebar openis${sideMenu}`}>
                        { user && 
                            <div className='userWrapper'>
                                <div className='divider'></div>
                                <h4>Hej {name}!</h4>
                                <Link to="/Skapa">Skapa inlägg</Link>
                                <p onClick={logout}>Logga ut</p> 
                            </div>
                        }
                            <div className='links'>
                                <Link to="/">Hem</Link>
                                <Link to="/projekt">Inlägg</Link>
                                <Link to="/omOss">Om Oss</Link>
                                
                            </div>
                    
                    </div>
                    <div className={`backdrop${sideMenu}`}></div>
                </nav>
            </div>
        )
    } else {

    

    return ( 
        <nav className={`scrollis${isShrunk.toString()}`}>
            <h1>V S V</h1>
            <div className='stroke'>
                <Link to="/">Hem</Link>
                <Link to="/projekt">Inlägg</Link>
                <Link to="/omOss">Om Oss</Link>
            </div>
            <div className='userWrapper'>
            {user && <div className='userChoices' > 
            <p>Hej, {name}!<button onClick={handleDropMenu}>V</button></p>
                    {dropMenu ? 
                    <div className='dropDown'>
                        <Link to="/Skapa"><p>Skapa ett inlägg</p></Link>
                        <p onClick={logout}>Logga ut </p> 
                    </div>
                        : 
                    <div></div>}
                </div> }
            </div>
        </nav>
    );
}
}

export default NavBar;