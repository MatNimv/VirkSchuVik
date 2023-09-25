import parse from 'html-react-parser';
import React from 'react';
import AddProjekt from '../../functions/AddProjekt';
import { useState } from "react";
import purple_wool from '../../media/purple_wool.png'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



const Preview = ({projectInfo, isOpen, handleClose}) => {
    const history = useHistory();

    console.log(projectInfo.dateShow);

    if (!isOpen) {
        return null;
    }

    const setElementsRight = () => {
        document.querySelector("main").style.backgroundColor = "white";
        document.querySelector("main").style.height = "auto";
        document.querySelector("footer").style.marginTop = "20vh";
    }

    const handleUpload = () => {
        //allt gick bra, nu skicka till firebase
        AddProjekt({ 
            title: projectInfo.title, 
            body: projectInfo.body, 
            hook: projectInfo.hook, 
            yarn: projectInfo.yarn,
            bought: projectInfo.bought,
            hero: projectInfo.image,
            id: projectInfo.id,
            date: projectInfo.date,
            author: projectInfo.author,
            dateShow: projectInfo.dateShow
        });

        setTimeout(() => {
            history.push("/projekt");
        }, 100000);
    }

    return ( 
        <div id="PreviewWrapper">
            <div id="ArtWrapper">
                <div className='upperInfo'>
                    <h1>{projectInfo.title}</h1>
                    <p>Av <span className='highlightPurple'>{projectInfo.author}</span></p>
                    <p>{projectInfo.dateShow}</p>
                </div>
                <img src={projectInfo.image} alt={projectInfo.title}></img>
                <div className='textBody'>{parse(projectInfo.body)}</div>
                <div className='projektGadgets'>
                <h3>Fun Facts:</h3>
                    <div className='factsBox'>
                        <ul>
                            <li><div className='listPic'></div><span className='bold'>Typ av garn: </span>{projectInfo.yarn}</li>
                            <li><div className='listPic'></div><span className='bold'>Garn köpt: </span>{projectInfo.bought}</li>
                            <li><div className='listPic'></div><span className='bold'>Storlek på hook: </span>{projectInfo.hook}</li>
                        </ul>
                    </div>
                </div>
                <div className="buttonContainer">
                    <button className="edit" onClick={handleClose}>Fortsätt redigera</button>
                    <button className="upload" onClick={() => {
                        setElementsRight()
                        handleClose()
                        handleUpload()
                    }}>Ladda upp</button>
                </div>
            </div>
        </div>
    );
}

export default Preview;