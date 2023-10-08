import { Link } from 'react-router-dom';
import firebase from '../firebase';
import React, { useEffect, useState } from "react";
import { auth, logout } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Footer = () => {

    const [footerText, setFooterText] = useState("");
    const [user, loading, error] = useAuthState(auth);

    function getFooterText() {
        const ref = firebase.firestore().collection("info");
        ref.onSnapshot((QuerySnapshot) => {
            let items = [];
            QuerySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setFooterText(items[0].Footer)
            });
        }

        useEffect(() => {
            getFooterText();
        })

    return ( 
        <footer>
            <div className="footerInfo">
                <h2>V S V</h2>
            
            </div>
            <div className="footerLinks stroke">
                <h4><Link to="/projekt">Inlägg</Link></h4>
                <h4><Link to="/omOss">Om Oss</Link></h4>
                
                {user ? 
                        <h4 onClick={logout}><Link to="/">Logga ut</Link></h4>
                        : 
                        <h4><Link to="/Login">Admin</Link></h4>
                        }
            </div>
        </footer>
    );
}

export default Footer;