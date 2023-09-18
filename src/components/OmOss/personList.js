import { useState } from 'react';
import firebase from '../../firebase';
import { useEffect } from 'react';
import LoremIpsum from '../LoremIpsum';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const PersonList = () => {

    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("people");

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
        return <h1>Laddar in information...</h1>
    }

    return ( 
        <div id="personListWrapper">
        {people.map((pep) => (
            
            <div className="person" key={pep.id}>
                <Link to={`/projekt?author=${pep.fname}`}><img src={pep.profilePic} alt={`Bild på ${pep.fname}`}></img></Link>
                <h3>{pep.fname} {pep.lname}</h3>
                <p>{pep.description}</p>
                <p>Min favoritvirkning: {pep.favorite}</p>
                <p>Se {pep.fname}s <Link to={`/projekt?author=${pep.fname}`}><span className='highlightPurple'>projekt!</span></Link></p>
            </div>
            ))}
        </div>
    );
}

export default PersonList;