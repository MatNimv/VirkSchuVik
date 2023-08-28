import { useState, useEffect } from 'react';
import firebase from '../../src/firebase';

const SnapshotFBProjekt = () => {
    
    const [projekt, setProjekt] = useState([]);
    const [loading, setLoading] = useState(false);
    //const {author} = useParams();
    //kan göras snyggare, vet
    //let authors = ['Matilda', 'Lucas', 'Kajsa'];

    const ref = firebase.firestore().collection("projekt");

    function getProjekts() {
        setLoading(true);
        ref.onSnapshot((QuerySnapshot) => {
            let items = [];
            QuerySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            console.log(items);
            setProjekt(items);
            setLoading(false);
        });
    }

    //lägg till ett projekt.


    //ta bort ett projekt.
    function deleteProjekt(projekt){
        ref 
            .doc(projekt.id)
            .delete()
            .catch((err) => {
                console.error(err);
            });
    }

    function editProjekt(updatedProjekt){
        setLoading();
        ref
            .doc(updatedProjekt.id)
            .update(updatedProjekt)
            .catch((err) => {
                console.error(err);
            })
    }

    useEffect(() => {
        getProjekts();
    }, [])

    if (loading){
        return <h2>Laddar in projekt...</h2>
    }

    return { projekt, loading };
}

export default SnapshotFBProjekt;