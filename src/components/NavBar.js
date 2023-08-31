import { Link } from 'react-router-dom';
import '../styles/animations.css';

import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
    const [isShrunk, setShrunk] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const history = useHistory();
    const currentUser = auth.currentUser;

    //const fetchUserName = async () => {
    //    try {
    //        const q = query(collection(db, "users"), where("uid", "==", user.uid));
    //        const doc = await getDocs(q);
    //        const data = doc.docs[0].data();
    //        console.log(doc);
    //        setName(data.name);
    //    } catch (err) {
    //        console.log(err);
    //        alert("An error occured while fetching user data");
    //    }
    //}

    //if(currentUser){
    //    const iud = currentUser.uid;
    //    console.log(iud);
    //    fetchUserName();
    //    
    //} else {
    //    console.error("fel");
    //}

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

        //if (loading) return;
        //if(!user) history.push("/");
        //fetchUserName();

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
                <p>Inloggad som {name}</p>
                <div>{user?.email}</div>
                {user && <button onClick={logout}>Logga ut</button>}
                {!user && <Link to="/login"><button>Logga in</button></Link>}                  
            </div>
        </nav>
    );
}

export default NavBar;