import { Link } from "react-router-dom/cjs/react-router-dom.min";
import firebase from '../../functions/firebase'

//let data = await getDocument('Articles', slug);

// const  getPeopleDB = async () => {
//    const peopleRef = db.collection('people');
//    const snapshot = await peopleRef.where('people', '==', true).get();
//    if (snapshot.empty) {
//      console.log('No matching documents.');
//      return;
//    }  
//
//    snapshot.forEach(doc => {
//      console.log(doc.id, '=>', doc.data());
//    });
//}



const  PersonLista = ({personer}) => {

    //getPeopleDB();

    return ( 
        <div id="personListaWrapper" >
            {personer.map((person) => (
                <div className="person" key={person.id}>
                    <Link to={`/personer/${person.id}`}>
                        <h4>Mitt namn är: {person.name}</h4>
                        <p>Jag gör: {person.do}</p>
                        <p>Jag är {person.age} år.</p>
                    </Link>
                </div>
            ))}
        </div>
    );
    
}

export default PersonLista;