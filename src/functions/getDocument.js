import { useEffect, useState } from 'react';
import firebase from '../firebase';

/*
async function GetDocument(document, field, match) {
    const [data, setData] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    console.log(document, field, match);
    const items = [];
    async function getQuery(){

        const firebaseRef = firebase.firestore().collection(document);
        const queryRef = await firebaseRef.where(`${field}`, '==', match).get();
    
        const testRef = await firebaseRef.where(`author`, '==', true).get();
        testRef.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
        })

        if(queryRef.empty){
            setError(true);
        }
    
        firebaseRef.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            items.push(doc.data());
            setLoading(true);
            setError(false);
        });
        console.log(items);
    
        setData(items);
    }


    useEffect(() => {
        getQuery()
    }, [document])

    console.log(data);
    console.log(error);

    return {data, error, loading}
}

export default GetDocument;

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