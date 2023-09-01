import firebase from "../firebase";

const ref = firebase.firestore().collection("projekt");

function AddProjekt(newProjekt) {
    console.log("laddar upp på fb");
    ref
        .doc(newProjekt.id)
        .set(newProjekt)
        .catch((err) => {
            console.error(err);
        })
}

export default AddProjekt;