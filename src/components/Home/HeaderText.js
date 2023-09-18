import { Link } from 'react-router-dom';
import LoremIpsum from '../LoremIpsum';
import firebase from '../../firebase';
import React, { useEffect, useState } from "react";

const HeaderText = () => {

    const [headerText, setHeaderText] = useState("");
    const [loading, setLoading] = useState("");

    function getHeaderText() {
        const ref = firebase.firestore().collection("info");
        setLoading(true);
        ref.onSnapshot((QuerySnapshot) => {
            let items = [];
            QuerySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setHeaderText(items[0].HeaderText)
            });
        }

        useEffect(() => {
            getHeaderText();
        })

    return ( 
        <div className='introWrapper'>
            <div>
            <Link to="/projekt">
                <button>
                    Se Våra Skapelser
                </button>
            </Link>
                <p>{headerText}</p>
            </div>
        <h1>VirkSchuVik</h1>
    </div>
    );
}

export default HeaderText;