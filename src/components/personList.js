import { useState } from 'react';
import firebase from '../firebase';
import { useEffect } from 'react';

const PersonList = () => {

    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("people");
    console.log(ref);

    function getPeople() {
        setLoading(true);
        ref.onSnapshot((QuerySnapshot) => {
            const items = [];
            QuerySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setPeople(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getPeople();
    }, [])

    if (loading){
        return <h1>Loading...</h1>
    }

    return ( 
        <div id="personListWrapper">
        <h1>Om Oss</h1>
        {people.map((pep) => (
            <div className="person" key={pep.id}>
                <h3>{pep.name}</h3>
                <p>{pep.description}</p>
                <p>Min favoritvirkning: {pep.favorite}</p>
            </div>
            ))}
        </div>
    );

}

export default PersonList;