import { useState, useEffect, useRef } from 'react';
import firebase from '../../firebase';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useLocation } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import useWindowDimensions from '../../functions/getWindowDimensions'
import parse from 'html-react-parser';
;

const ProjektList = () => {
    const [allprojekts, setProjekt] = useState([]);
    const [projektAuthor, setProjektAuthor] = useState([]);
    const [loading, setLoading] = useState(false);
    const [headerTitle, setHeaderTitle] = useState("");

    const ref = firebase.firestore().collection("projekt");
    const location = useLocation();
    const { search } = location;
    const { height, width } = useWindowDimensions();

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

    function sortDates(arr){
        arr.sort((a, b) => {
            a = a.date.split('/');
            b = b.date.split('/');
            return b[2] - a[2] || b[1] - a[1] || b[0] - a[0];
            });
    }

    function getProjekt() {
        setLoading(true);
        ref.onSnapshot((QuerySnapshot) => {
            let items = [];
            QuerySnapshot.forEach((doc) => {
                items.push(doc.data());
            });

            setHeaderTitle("Våra Senaste Inlägg");

            //om url innehåller author
            if(search.indexOf('author') > -1){
                const author = search.split('=').pop();
                items = items.filter((pro) => pro.author === author);
                setHeaderTitle(`Inlägg av ${author}`);
            }

            sortDates(items)
            setProjekt(items);
            setLoading(false);
            });
        }

    useEffect(() => {
        getProjekt();
    }, [search])

    if (loading){
        return <h2>Laddar in projekt...</h2>
    }

    //annat mobilformat
    if(width < 732){
        return ( 
            <div id="ProjektGridWrapper" className='mobile'>
                <h1>{headerTitle}</h1>
                <div id="gridWrapper">
                    {allprojekts.map((pro) => (
                        <div className='oneGrid' key={pro.id}>
                        	<div className="card" style={{backgroundImage: `url(${pro.hero})`}}>
                                <a href={'/projekt/' + pro.id}>
                                    <div className="gradient" />
                                    <div className="text">
                                        <h2>{pro.title}</h2>
                                        <span className='previewText'>{renderPreviewTextMobile(pro.body)}</span>
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
    } else {

        return ( 
            <div id="projektListWrapper">
                <h1>{headerTitle}</h1>
                {search && <h3>Se alla <span className='highlightPurple'><Link to="/projekt">inlägg!</Link></span></h3>}
                {allprojekts.map((pro) => (
                    <div className="oneProjektWrapper" key={pro.id}>
                        <Link to={`projekt/${pro.id}`} >
                            <div className='projektInfo'>
                                <div className='projektText'>
                                    <h2>{pro.title}</h2>
                                    <p>Skapad av: <Link className='strokeText' to={`/projekt?author=${pro.author}`}>{pro.author}</Link></p>
                                    <p>{pro.dateShow}</p>
                                    <span className='previewText'>{renderPreviewText(pro.body)}</span>
                                </div>
                                <img src={pro.hero} alt={pro.title}></img>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default ProjektList;