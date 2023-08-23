import { useEffect, useState } from 'react';
import firebase from '../firebase';


const GetDocument = (document) => {
/*
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection(`${document}`);
    
    console.log(ref);


    function getData() {
        setLoading(true);
        ref.onSnapshot((QuerySnapshot) => {
            const items = [];
            QuerySnapshot.forEach((doc) => {
                items.push(doc.data());
                //console.log(doc.data());
            });
            setData(items);
            setLoading(false);
            console.log(items);
        });
    }

    useEffect(() => {
        getData();
    }, []);


    if (loading){
        return <h1>Loading...</h1>
    }

    //console.log(items);

    return items;*/
}

export default GetDocument;