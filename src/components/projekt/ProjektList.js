import { useState, useEffect } from 'react';
import firebase from '../../firebase';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';

const ProjektList = () => {

    const [projekt, setProjekt] = useState([]);
    const [loading, setLoading] = useState(false);
    const {author} = useParams();
    //kan göras snyggare, vet
    //let authors = ['Matilda', 'Lucas', 'Kajsa'];

    const ref = firebase.firestore().collection("projekt");

    function getProjekt() {
        setLoading(true);
        ref.onSnapshot((QuerySnapshot) => {
            let items = [];
            QuerySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            //items.forEach((item) => {
            //    if(item.author === author){
            //        items = [];
            //        items.push(item);
            //    }
            //})
            console.log(items);
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
                <Link to={`projekt/${pro.id}`}>
                    <div className='projektWrapper'>
                        <h2>{pro.title}</h2>
                        <p>av {pro.author}</p>
                        <p>{pro.date}</p>
                        <img src={pro.hero} alt={pro.title}></img>
                    </div>
                </Link>
            </div>
            ))}
            
        </div>
    );
}

export default ProjektList;