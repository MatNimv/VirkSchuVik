import AddProjekt from '../functions/AddProjekt';
import { useState } from "react";
import {v4 as uuidv} from 'uuid';

const Skapa = () => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [author, setAuthor] = useState("Kajsa");


    return ( 
        <div id="addProjektWrapper">
            <h1>Lägg till ett projekt</h1>
                <input type="text" placeholder="Titel" onChange={(e) => setTitle(e.target.value)}></input>
                <textarea placeholder="Beskrivning av projektet" onChange={(e) => setDesc(e.target.value)}></textarea>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Kajsa"></option>
                    <option value="Lucas"></option>
                    <option value="Matilda"></option>
                </select>
                <button onClick={() => AddProjekt({ title, desc, id: uuidv()})}>
                    Lägg till
                </button>
        </div>
    );
}
 
export default Skapa;