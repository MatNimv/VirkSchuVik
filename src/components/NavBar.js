import { Link } from 'react-router-dom';
import '../styles/animations.css';

import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import firebase from '../firebase';

const NavBar = () => {
    const [isShrunk, setShrunk] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const history = useHistory();
    const currentUser = auth.currentUser;
    const [dbUsers, setUsers] = useState([])

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

    //kolla om någon är inloggad eller ej
    if(currentUser){
        fetchUserName()
    } else {

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

    return ( 
        <nav className={`scrollis${isShrunk.toString()}`}>
            <h1>V S V</h1>
            <div className='stroke'>
                <Link to="/">Hem</Link>
                <Link to="/projekt">Projekt</Link>
                <Link to="/omOss">Om Oss</Link>
            </div>
            <div className='userWrapper'>
                {user && <p>Inloggad som {name}</p>}
                {user && <button onClick={logout}>Logga ut</button>}
                {!user && <Link to="/login"><button>Logga in</button></Link>}                  
            </div>
        </nav>
    );
}

export default NavBar;