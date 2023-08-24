import { useState } from 'react';
import firebase from '../../firebase';
import { useEffect } from 'react';

const ProjektList = () => {

    const [projekt, setProjekt] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("projekt");

    function getProjekt() {
        setLoading(true);
        ref.onSnapshot((QuerySnapshot) => {
            const items = [];
            QuerySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setProjekt(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getProjekt();
    }, [])

    if (loading){
        return <h2>Laddar in projekt...</h2>
    }

    return ( 
        <div id="projektListWrapper">
        {projekt.map((pro) => (
            <div className="projekt" key={pro.id}>
                <div className='projektWrapper'>
                    <h2>{pro.title}</h2>
                    <p>av {pro.author}</p>
                    <p>{pro.date}</p>
                    <img src={pro.hero} alt={pro.title}></img>
                </div>
            </div>
            ))}
            
        </div>
    );
}

export default ProjektList;