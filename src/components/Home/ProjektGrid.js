import { useState, useEffect } from 'react';
import firebase from '../../firebase';
import parse from 'html-react-parser';

function renderPreviewText(text){
    let slicedText = text.slice(0,80);
    let finishedText = slicedText + "...</p>";
    let parsedText = parse(finishedText)
    return parsedText;
}

function renderPreviewTextMobile(text){
    let slicedText = text.slice(0,30);
    let finishedText = slicedText + "...</p>";
    let parsedText = parse(finishedText)
    return parsedText;
}


const ProjektGrid = () => {
    const [projekt, setProjekt] = useState([]);
    const [loading, setLoading] = useState(true);
    const ref = firebase.firestore().collection("projekt");

    function randomiseArr(array){
        let i = array.length;
        while (i > 0) {
          const ri = Math.floor(Math.random() * i);
            i--;
            [array[i], array[ri]] = [array[ri], array[i]];
        }
        //kortar ner arrayen till griden
        array.length = 3;
        return array;
    }

    function getProjekt() {
        setLoading(true);
        ref.onSnapshot((QuerySnapshot) => {
            let items = [];
            QuerySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setProjekt(randomiseArr(items));
            setLoading(false);
            });
        }

        useEffect(() => {
            getProjekt()
        }, [])

        if(loading){
            return <h1>Laddar in projekt...</h1>
        }

        return ( 
            <div id="ProjektGridWrapper">
                <div id="gridWrapper">
                    {projekt.map((pro) => (
                        <div className='oneGrid' key={pro.id}>
                        	<div className="card" style={{backgroundImage: `url(${pro.hero})`}}>
                                <a href={'/projekt/' + pro.id}>
                                    <div className="gradient" />
                                    <div className="text">
                                        <h2>{pro.title}</h2>
                                        <div className="info-container">
                                            <h5>av {pro.author}</h5>
                                            <h5>{pro.dateShow}</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
}

export default ProjektGrid;