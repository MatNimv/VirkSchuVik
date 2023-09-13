import { useState, useEffect, useRef } from 'react';
import firebase from '../../firebase';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useLocation } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';

const ProjektList = () => {
    const [allprojekts, setProjekt] = useState([]);
    const [projektAuthor, setProjektAuthor] = useState([]);
    const [loading, setLoading] = useState(false);
    const [forfattare, setForfattare] = useState("");
    const [headerTitle, setHeaderTitle] = useState("");

    const ref = firebase.firestore().collection("projekt");
    const location = useLocation();
    const { search } = location;

    function sortDates(arr){
        arr.sort((a, b) => {
            a = a.date.split('/');
            b = b.date.split('/');
            return b[2] - a[2] || b[1] - a[1] || b[0] - a[0];
            });
    }

    function getProjekt() {
        setLoading(true);
        ref.onSnapshot((QuerySnapshot) => {
            let items = [];
            QuerySnapshot.forEach((doc) => {
                items.push(doc.data());
            });

            setHeaderTitle("Våra Senaste Projekt")

            //om url innehåller author
            if(search.indexOf('author') > -1){
                const author = search.split('=').pop();
                items = items.filter((pro) => pro.author === author);
                setHeaderTitle(`Projekt skapat av ${author}!`);
            }

            sortDates(items)
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
            <h1>{headerTitle}</h1>
            {allprojekts.map((pro) => (
                <div className="oneProjektWrapper" key={pro.id}>
                    <Link to={`projekt/${pro.id}`} >
                        <div className='projektInfo'>
                            <div className='projektText'>
                                <h2>{pro.title}</h2>
                                <p>Skapad av: <Link className='strokeText' to={`/projekt?author=${pro.author}`}>{pro.author}</Link></p>
                                <p>{pro.dateShow}</p>
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