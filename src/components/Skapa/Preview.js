const Preview = ({projectInfo, isOpen, handleClose}) => {

    if (!isOpen) {
        return null;
    }

    return ( 
        <div id="PreviewWrapper">
            <div id="ArtWrapper">
                <h1>{projectInfo.title}</h1>
                <p>{`${projectInfo.dayWr} ${projectInfo.monthWr} ${projectInfo.yearWr}`}</p>
                <p></p>
                <img src={projectInfo.image} alt={projectInfo.title}></img>
                <p>{projectInfo.body}</p>
                <div className='projektGadgets'>
                    <ul>
                        <li>Typ av garn: {projectInfo.yarn}</li>
                        <li>Garn köpt: {projectInfo.bought}</li>
                        <li>Storlek på hook: {projectInfo.hook}</li>
                    </ul>
                </div>
                <div className="buttonContainer">
                    <button onClick={handleClose}>Fortsätt redigera</button>
                    <button onClick={handleClose}>Ladda upp</button>
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