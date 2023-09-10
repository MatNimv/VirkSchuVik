import AddProjekt from '../functions/AddProjekt';
import { useEffect, useState } from "react";
import {v4 as uuidv} from 'uuid';
import { storage } from "../firebase";
import { ref as storageRef, 
        getDownloadURL, 
        uploadBytes 
    } from "firebase/storage";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useAuthState } from "react-firebase-hooks/auth";
import ReactModal from 'react-modal';

import { auth, db, firebase } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { query, collection, getDocs, where } from "firebase/firestore";
import '../styles/Skapa.css';
import Preview from '../components/Skapa/Preview';

const Skapa = () => {

    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();
    const currentUser = auth.currentUser;
    const [name, setName] = useState("");

    //popUp
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [yarn, setYarn] = useState("");
    const [hook, setHook] = useState("1mm");
    const [bought, setBought] = useState("");
    const [yearWr, setYearWr] = useState("");
    const [monthWr, setMonthWr] = useState("");
    const [dayWr, setDayWr] = useState("");
    const [year, setYear] = useState(0);
    const [month, setMonth] = useState(0);
    const [day, setDay] = useState(0);

    //bild
    const [percent, setPercent] = useState(0);
    const [storageUrl, setStorageUrl] = useState("");
    const [imageUpload, setImageUpload] = useState(null);

    //detta ska göras om till en komponent
    async function fetchUserName() {
        const uid = currentUser.uid;

        try {
            const q = query(collection(db, "people"), where("id", "==", uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.fname);
        } catch (err) {
            alert("Ett fel uppstod när användardatan hämtades. Försök igen.");
        }
    }

    let hookArr = ["1", "2", "2,5", "3", "3,5", "4", "4,5", "5", "6", "7", "8", "9", "10"]

    function getDate(){ //för databasen att sortera enligt datum
        let newDate = new Date()
        let day = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        let strday = day.toString()
        let strmonth = month.toString();
        let stryear = year.toString();

        setDay(strday);
        setMonth(strmonth);
        setYear(stryear);
    }

    function getShowDate(){ //skriver ut datumet finare i projektet
        return `${dayWr} ${monthWr} ${yearWr}`;
    }

    const handleUpload = () => {
        //genererat id
        const id = uuidv();
        getDate();

        const imageRef = storageRef(storage, `/projekt/${id}/${id}`)

        const uploadFile = async () => {
                const snapshot = await uploadBytes(imageRef, imageUpload);
                const url = await getDownloadURL(snapshot.ref);
                setStorageUrl(url);
                return url;
            }
            setStorageUrl(uploadFile);
        }


        //kolla om någon är inloggad eller ej
        const autho = getAuth();
        onAuthStateChanged(autho, (user) => {
            if (user) {
            //console.log(user);
              // ...
            } else {
                history.push("/");
              // User is signed out
              // ...
            }
        });

    return ( 
        
        <div id="SkapaWrapper">
            <Preview 
            projectInfo={{
                            title:title, 
                            body:body,
                            dayWr:dayWr, 
                            monthWr:monthWr,
                            yearWr:yearWr,
                            yarn:yarn,
                            bought:bought,
                            image: storageUrl,
                            hook: hook,
                            author: author
                        }}
            isOpen={isOpen} handleClose={handleClose} />
            <h1>Lägg till ett projekt</h1>
            <div className='formContainer'>

                <div className='formTop'>
                    <div className='projectInit'>
                        <input type="text" placeholder="Titel" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                        <textarea placeholder="Beskrivning av projektet" value={body} onChange={(e) => setBody(e.target.value)} ></textarea>
                        <select value={name} onChange={(e) => setAuthor(e.target.value)}>
                            <option label="Kajsa" value="Kajsa"></option>
                            <option label="Lucas" value="Lucas"></option>
                            <option label="Matilda" value="Matilda"></option>
                        </select>
                    </div>
                    <div className='middleSpace'></div>
                    <div className='projectGadgets'>
                    <input type="text" placeholder="Typ av garn" value={yarn} onChange={(e) => setYarn(e.target.value)} ></input>
                        <input type="text" placeholder="Var garnet är köpt" value={bought} onChange={(e) => setBought(e.target.value)} ></input>
                        <select value={hook} onChange={(e) => setHook(e.target.value)}>
                            {hookArr.map((hook) => 
                                <option label={`${hook}mm`} value={`${hook}mm`} key={hook}></option>
                            )}
                        </select>
                        <div className='dateMade'>
                            <p>Datum projektet skapades dd-mån-åååå format: </p>
                            <div className='dates'>
                                <input type="text" placeholder="8" value={dayWr} onChange={(e) => setDayWr(e.target.value)}></input>
                                <input type="text" placeholder="Feb" value={monthWr} onChange={(e) => setMonthWr(e.target.value)}></input>
                                <input type="text" placeholder="1999" value={yearWr} onChange={(e) => setYearWr(e.target.value)}></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='formDivider'></div>
                <div className='formBottom'>
                    <p>Lägg till bild. 1:1 format.</p>
                    <input type="file" accept="image/*" 
                        onChange={(event) => {
                                    setImageUpload(event.target.files[0])
                                }}>
                    </input>
                    <button type="submit" onClick={() => {
                                if (imageUpload === null){
                                    alert("Välj en bild tack.");
                                } else {
                                    handleUpload();
                                    handleOpen();
                                }
                    }}
                        >Förhandsgranska
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Skapa;
