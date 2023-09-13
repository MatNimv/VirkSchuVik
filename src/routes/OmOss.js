import PersonList from '../components/OmOss/personList';
import '../styles/omOss.css';
import LoremIpsum from '../components/LoremIpsum';
import firebase from '../firebase';
import { useState, useEffect } from 'react';

const OmOss = () => {
    const ref = firebase.firestore().collection("info");
    const [omOssText, setOmOssText] = useState("");
    const [loading, setLoading] = useState(true);

    function getOmOss() {
        ref.onSnapshot((QuerySnapshot) => {
            let items = [];
            QuerySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setOmOssText(items[0].OmOss)
            setLoading(false);
            });
        }

        useEffect(() => {
            getOmOss()
        }, [omOssText])

    return ( 
    <div id="omOssWrapper">
        <h1>Om VirkSchuVik</h1>
        <p>{omOssText}</p>
        <PersonList></PersonList>
    </div> 
    );
}

export default OmOss;