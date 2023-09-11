import parse from 'html-react-parser';
import React from 'react';


const Preview = ({projectInfo, isOpen, handleClose}) => {

    if (!isOpen) {
        return null;
    }

    const body = parse(projectInfo.body);

    return ( 
        <div id="PreviewWrapper">
            <div id="ArtWrapper">
                <h1>{projectInfo.title}</h1>
                <p>Av {projectInfo.author}</p>
                <p>{`${projectInfo.dayWr} ${projectInfo.monthWr} ${projectInfo.yearWr}`}</p>
                <img src={projectInfo.image} alt={projectInfo.title}></img>
                <div>{body}</div>
                <div className='projektGadgets'>
                    <ul>
                        <li>Typ av garn: {projectInfo.yarn}</li>
                        <li>Garn köpt: {projectInfo.bought}</li>
                        <li>Storlek på hook: {projectInfo.hook}</li>
                    </ul>
                </div>
                <div className="buttonContainer">
                    <button className="edit" onClick={handleClose}>Fortsätt redigera</button>
                    <button className="upload" onClick={handleClose}>Ladda upp</button>
                </div>

            </div>

        </div>
    );
}

export default Preview;

            ////allt gick bra, nu skicka till firebase
            //AddProjekt({ title, 
            //    body, 
            //    hook, 
            //    yarn,
            //    bought,
            //    hero: storageUrl,
            //    id,
            //    year: year,
            //    month: month,
            //    day: day,
            //    author,
            //    dateShow: getShowDate()
            //    });
            //setTitle("");
            //setBody("");
            //setYarn("");
            //setBought("");