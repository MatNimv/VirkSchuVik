import AddProjekt from '../functions/AddProjekt';
import { useState } from "react";
import {v4 as uuidv} from 'uuid';
import { storage } from "../firebase";
import { ref as storageRef, 
        uploadBytesResumable, 
        getDownloadURL, 
        uploadBytes 
    } from "firebase/storage";

import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useAuthState } from "react-firebase-hooks/auth";

const Skapa = () => {


    const history = useHistory();
    const [user, loading, error] = useAuthState(auth);
    const currentUser = auth.currentUser;

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Kajsa");
    const [yarn, setYarn] = useState("");
    const [hook, setHook] = useState("1mm");
    const [bought, setBought] = useState("");
    const [percent, setPercent] = useState(0);
    const [storageUrl, setStorageUrl] = useState("");
    const [imageUpload, setImageUpload] = useState(null);

    let hookArr = ["1", "2", "2,5", "3", "3,5", "4", "4,5", "5", "6", "7", "8", "9", "10"]

    function getDate(){
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${date}/${month}-${year.toString().substring(2)}`;
    }

    const handleUpload = () => {
        const id = uuidv();

        if (imageUpload === null){
            alert("Välj en bild tack.");
            return;
        } else {
            const imageRef = storageRef(storage, `/projekt/${id}`)
            
            uploadBytes(imageRef, imageUpload)
                .then((snapshot) => {
                    getDownloadURL(snapshot.ref)
                        .then((url) => {
                            setStorageUrl(url);
                        })
                        .catch((error) => {
                            alert(error.message);
                        })
                })
                .catch((error) => {
                    alert(error.message);
                })

            //const uploadTask = uploadBytesResumable(storageRef, imageUpload);
            //const storageRef = ref(storage, `/projekt/${id}`);

            //uploadTask.on(
            //    "state_changed",
            //    (snapshot) => {
            //        const percent = Math.round(
            //            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            //        );
            //        // update progress
            //        setPercent(percent);
            //    },
            //    (err) => console.log(err),
            //    () => {
            //        // download url
            //        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            //            console.log(url);
            //            setStorageUrl(`${url}`);
            //        });
            //    }
            //)

            
            //allt gick bra, nu skicka till firebase
            AddProjekt({ title, 
                body, 
                hook, 
                yarn,
                bought,
                hero: storageUrl,
                id: id,
                date: getDate(),
                });
            setTitle("");
            setBody("");
            setYarn("");
            setBought("");
        }
    }

    //icke inloggad får inte vara på denna sida.
    if(!currentUser){
        history.push("/");
    }

    return ( 
        <div id="addProjektWrapper">
            <h1>Lägg till ett projekt</h1>
                <input type="text" placeholder="Titel" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <textarea placeholder="Beskrivning av projektet" value={body} onChange={(e) => setBody(e.target.value)} ></textarea>
                <input type="text" placeholder="Typ av garn" value={yarn} onChange={(e) => setYarn(e.target.value)} ></input>
                <input type="text" placeholder="Var garnet är köpt" value={bought} onChange={(e) => setBought(e.target.value)} ></input>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option label="Kajsa" value="Kajsa"></option>
                    <option label="Lucas" value="Lucas"></option>
                    <option label="Matilda" value="Matilda"></option>
                </select>
                <select value={hook} onChange={(e) => setHook(e.target.value)}>
                    {hookArr.map((hook) => 
                        <option label={`${hook}mm`} value={`${hook}mm`} key={hook}></option>
                    )}
                </select>
                <input type="file" accept="image/*" 
                        onChange={(event) => {
                                    setImageUpload(event.target.files[0])
                                }}>
                </input>
                <button onClick={() => {
                            handleUpload();
                            }}>
                    Lägg till
                </button>
        </div>
    );
}

export default Skapa;