import firebase from "../firebase";

const ref = firebase.firestore().collection("projekt");

function AddProjekt(newProjekt) {
    ref
        .doc(newProjekt.id)
        .set(newProjekt)
        .catch((err) => {
            console.error(err);
        })
}

export default AddProjekt;