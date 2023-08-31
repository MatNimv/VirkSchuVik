import { useState, useEffect } from 'react';
import firebase from '../../firebase';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';

const ProjektList = () => {

    const [projekt, setProjekt] = useState([]);
    const [loading, setLoading] = useState(false);
    const {author} = useParams();
    const [numProjekts, setNumProjects] = useState(0);
    const [gridStyle, setGridStyle] = useState("");

    const ref = firebase.firestore().collection("projekt");

    function getProjekt() {
        setLoading(true);
        ref.onSnapshot((QuerySnapshot) => {
            let items = [];
            QuerySnapshot.forEach((doc) => {
                items.push(doc.data());
            });

            setNumProjects(items.length);
            setProjekt(items);
            setLoading(false);

            //beroende på antal projekt, stylas en grid
            if(items.length ){

            }
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
            <div className="oneProjektWrapper" key={pro.id}>
                <Link to={`projekt/${pro.id}`} >
                    <div className='projektInfo'>
                        <div className='projektText'>
                            <h2>{pro.title}</h2>
                            <p>Skapad av: <Link className='strokeText' to={`/projekt${pro.author}/`}>{pro.author}</Link></p>
                            <p>{pro.date}</p>
                        </div>
                        <img src={pro.hero} alt={pro.title}></img>
                    </div>
                </Link>
            </div>
            
            ))}
            
        </div>
    );
}

export default ProjektList;