import AddProjekt from '../functions/AddProjekt';
import { useState } from "react";
import {v4 as uuidv} from 'uuid';
import { db, storage } from "../firebase";
import { ref as storageRef, 
        uploadBytesResumable, 
        getDownloadURL, 
        uploadBytes 
    } from "firebase/storage";

//import ref from 'firebase/compat/storage';

const Skapa = () => {

    //infon till projekt
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Kajsa");
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

        if (imageUpload === null){
            alert("Välj en bild tack.");
            return;
        } else {
            const imageRef = storageRef(storage, `/projekt/${id}/${id}`)

            const uploadFile = async () => {
                    const snapshot = await uploadBytes(imageRef, imageUpload);
                    const url = await getDownloadURL(snapshot.ref);
                    setStorageUrl(url);
                    return url;
                }
                setStorageUrl(uploadFile);
            }

            //..ooooch laddar upp alltet
            AddProjekt({ 
                title, 
                body, 
                hook, 
                yarn,
                bought,
                hero: storageUrl,
                id,
                year: year,
                month: month,
                day: day,
                author,
                dateShow: getShowDate()
                });
            setTitle("");
            setBody("");
            setYarn("");
            setBought("");
        }

    return ( 
        <div id="addProjektWrapper">
            <h1>Lägg till ett projekt</h1>
                <input type="text" placeholder="Titel" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <textarea placeholder="Beskrivning av projektet" value={body} onChange={(e) => setBody(e.target.value)} ></textarea>
                <input type="text" placeholder="Typ av garn" value={yarn} onChange={(e) => setYarn(e.target.value)} ></input>
                <input type="text" placeholder="Var garnet är köpt" value={bought} onChange={(e) => setBought(e.target.value)} ></input>
                <div className='dateMade'>
                    <p>Datum projektet skapades dd-mån-åååå format: </p>
                    <input type="text" placeholder="8" value={dayWr} onChange={(e) => setDayWr(e.target.value)}></input>
                    <input type="text" placeholder="Feb" value={monthWr} onChange={(e) => setMonthWr(e.target.value)}></input>
                    <input type="text" placeholder="1999" value={yearWr} onChange={(e) => setYearWr(e.target.value)}></input>
                </div>

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
                <p>{toString.percent} uppladdat</p>
                <button type="submit" onClick={() => {
                            handleUpload();
                            }}>
                    Lägg till
                </button>
        </div>
    );
}

export default Skapa;

            //.on(
            //        "state_changed",
            //        (snapshot) => {
            //            const percent = Math.round(
            //                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            //            );
            //            // update progress
            //            setPercent(percent);


                        // progress can be paused and resumed. It also exposes progress updates.
            // Receives the storage reference and the file to upload.
            //const uploadTask = uploadBytesResumable(imageRef, imageUpload);
//
            //uploadTask.on(
            //    "state_changed",
            //    (snapshot) => {
            //        const percent = Math.round(
            //            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            //        );
//
            //        // update progress
            //        console.log(percent);
            //        setPercent(percent);
            //        console.log(percent);
            //    },
            //    (err) => console.log(err),
            //    () => {
            //        // download url
            //        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            //            console.log(url);
            //            //..ooooch laddar upp alltet
            //            AddProjekt({ 
            //                title, 
            //                body, 
            //                hook, 
            //                yarn,
            //                bought,
            //                hero: storageUrl,
            //                id,
            //                year,
            //                month,
            //                day,
            //                author,
            //                dateShow: getShowDate()
            //                });
            //            setTitle("");
            //            setBody("");
            //            setYarn("");
            //            setBought("");
                    
            
            //uploadBytes(imageRef, imageUpload)
            //.then((snapshot) => {
//
            //        getDownloadURL(snapshot.ref)
            //        setImageLoad(true)
            //            .then((url) => {
            //                setStorageUrl(url);
            //                setImageLoad(false);
            //            })
            //            .catch((error) => {
            //                alert(error.message);
            //            })
            //    })
            //    .catch((error) => {
            //        alert(error.message);
            //    })
//
            //    console.log(storageUrl);
            //    
            //    setImageLoad(false);
//
            //    if (imageLoad){
            //        return <h2>Laddar upp bild...</h2>
            //    }
//
            //    if(!imageLoad){
            //        //allt gick bra, nu skicka till firebase
            //        //..ooooch laddar upp alltet
            //        AddProjekt({ 
            //            title, 
            //            body, 
            //            hook, 
            //            yarn,
            //            bought,
            //            hero: storageUrl,
            //            id,
            //            year,
            //            month,
            //            day,
            //            author,
            //            dateShow: getShowDate()
            //            });
            //        setTitle("");
            //        setBody("");
            //        setYarn("");
            //        setBought("");
                