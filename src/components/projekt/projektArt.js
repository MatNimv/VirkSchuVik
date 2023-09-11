import { useState } from 'react';
import firebase from '../../firebase';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import '../../styles/projekt.css';
import GetDocument from '../../functions/getDocument';

//här ska bara en projektartikel visas. 
//återstår hur jag löser det med länkar.

const ProjektArt = () => {

    const [projekt, setProjekt] = useState([]);

    const {id} = useParams();

    console.log(id);
    //const {data: projekts, error, loading} = GetDocument("projekt", "id", id);

    //console.log(projekts);


//denna ska hämta ID av dokumentet, inte alla
    
    const ref = firebase.firestore().collection("projekt");

    //function getProjekt() {
    //    setLoading(true);
    //    ref.onSnapshot((QuerySnapshot) => {
    //        const items = [];
    //        QuerySnapshot.forEach((doc) => {
    //            items.push(doc.data());
    //        });
    //        setProjekt(items);
    //        setLoading(false);
    //    });
//
    //}
//
    //useEffect(() => {
    //    getProjekt();
    //}, [])

   //if (loading){
   //    return <h2>Laddar in projekt...</h2>
   //}
   //if(error){
   //    return <h2>Gick inte att ladda in.</h2>
   //}


    return ( 
        <div id="projektArtWrapper">
        {projekt.map((pro) => (
            <div className="projekt" key={pro.id}>
                <div className='oneProjektArtWrapper'>
                    <h2>{pro.title}</h2>
                    <p>av {pro.author}</p>
                    <p>{pro.date}</p>
                    <img src={pro.hero} alt={pro.title}></img>
                    <p>{pro.body}</p>
                </div>
                <div className='projektGadgets'>
                    <ul>
                        <li>Typ av garn: {pro.yarn}</li>
                        <li>Garn köpt: {pro.bought}</li>
                        <li>Storlek på hook: {pro.hook}mm</li>
                    </ul>
                </div>
            </div>
            ))}
            
        </div>
    );
}
 
export default ProjektArt;