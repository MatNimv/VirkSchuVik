import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import '../../styles/projekt.css';
import { query, collection, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const ProjektArt = () => {

    const [projekt, setProjekt] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    //denna ska mha id hämta 1 projekt
    async function fetchIdProjekt() {
            try {
                const q = query(collection(db, "projekt"), where("id", "==", id));
                const doc = await getDocs(q);
                const data = doc.docs[0].data();
                setProjekt(data);
                console.log(data);
                setLoading(false);
            } catch (err) {
                alert("Ett fel uppstod när projektet hämtades. Försök igen.");
            }
        }

    //async function fetchAuthorProjekt() {
    //        try {
    //            const q = query(collection(db, "people"), where("fname", "==", author));
    //            const doc = await getDocs(q);
    //            const data = doc.docs[0].data();
    //            setProjekt(data);
    //            console.log(data);
    //        } catch (err) {
    //            alert("Ett fel uppstod när projektet hämtades. Försök igen.");
    //        }
    //    }

    useEffect(() => {
        if(id){fetchIdProjekt()};
        //if(author){fetchAuthorProjekt()};
    }, [id])

    if (loading){
        return <h2>Laddar in projekt...</h2>
    }

    return ( 
        <div id="projektArtWrapper">
            <div className='oneProjektArtWrapper'>
                <div className='upperInfo'>
                        <h1>{projekt.title}</h1>
                        <p>av <Link to={`/projekt/${projekt.author}`}>{projekt.author}</Link></p>
                        <p>{projekt.dateShow}</p>
                </div>
                <img src={projekt.hero} alt={projekt.title}></img>
                <div className='textBody'>{parse(projekt.body)}</div>
            </div>
            <div className='projektGadgets'>
                <h3>Fun Facts:</h3>
                <div className='factsBox'>
                    <ul>
                        <li><div className='listPic'></div><span className='bold'>Typ av garn :</span>{projekt.yarn}</li>
                        <li><div className='listPic'></div><span className='bold'>Garn köpt: </span>{projekt.bought}</li>
                        <li><div className='listPic'></div><span className='bold'>Storlek på hook: </span>{projekt.hook}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProjektArt;