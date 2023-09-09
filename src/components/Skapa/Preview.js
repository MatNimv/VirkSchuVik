const Preview = ({projectInfo, isOpen, handleClose}) => {

    if (!isOpen) {
        return null;
    }

    return ( 
        <div id="PreviewWrapper">
            <div id="ArtWrapper">
                <h1>{projectInfo.title}</h1>
                <p>{`${projectInfo.dayWr} ${projectInfo.monthWr} ${projectInfo.yearWr}`}</p>
                <img src={projectInfo.imageUpload} alt={projectInfo.title}></img>
                <p>{projectInfo.body}</p>
                <button onClick={handleClose}>Fortsätt redigera</button>
                <button onClick={handleClose}>Ladda upp</button>
            </div>

        </div>
    );
}

export default Preview;