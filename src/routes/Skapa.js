import AddProjekt from '../functions/AddProjekt';
import { useState } from "react";
import {v4 as uuidv} from 'uuid';

const Skapa = () => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [author, setAuthor] = useState("Kajsa");
    const [yarn, setYarn] = useState("");
    const [hook, setHook] = useState("");
    const [hero, setHero] = useState("");
    const [date, setDate] = useState("");

    let hookArr = ["1", "2", "2,5", "3", "3,5", "4", "4,5", "5", "6", "7", "8", "9", "10"]

    function getDate(){
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${date}/${month}-${year.toString().substring(2)}`;

        //<option label={`${hook}mm`} value={`${hook}mm`}></option>
    }
    getDate();

    return ( 
        <div id="addProjektWrapper">
            <h1>Lägg till ett projekt</h1>
                <input type="text" placeholder="Titel" onChange={(e) => setTitle(e.target.value)}></input>
                <textarea placeholder="Beskrivning av projektet" onChange={(e) => setDesc(e.target.value)}></textarea>
                <input type="text" placeholder="Typ av garn" onChange={(e) => setYarn(e.target.value)}></input>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option label="Kajsa" value="Kajsa"></option>
                    <option label="Lucas" value="Lucas"></option>
                    <option label="Matilda" value="Matilda"></option>
                </select>
                <select value={hook} onChange={(e) => setHook(e.target.value)}>
                    {hookArr.map((hook) => 
                        <option label={`${hook}mm`} value={`${hook}mm`}></option>
                    )}
                </select>
                <button onClick={() => AddProjekt({ title, 
                                                    desc, 
                                                    hook, 
                                                    yarn,
                                                    id: uuidv(),
                                                    date: getDate()
                                                })}>
                    Lägg till
                </button>
        </div>
    );
}
 
export default Skapa;