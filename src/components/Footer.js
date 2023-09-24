import { Link } from 'react-router-dom';
import firebase from '../firebase';
import React, { useEffect, useState } from "react";

const Footer = () => {

    const [footerText, setFooterText] = useState("");

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
                <img alt="V S V"></img>
            
            </div>
            <div className="footerLinks stroke">
                <h4><Link to="/projekt">Projekt</Link></h4>
                <h4><Link to="/omOss">Om Oss</Link></h4>
                <h4><Link to="/kontakt">Kontakta Oss</Link></h4>
                <h4><Link to="/Login">Admin</Link></h4>
            </div>
        </footer>
    );
}

export default Footer;