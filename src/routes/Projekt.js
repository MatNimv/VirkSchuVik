import ProjektList from "../components/projekt/ProjektList";
import '../styles/projekt.css';

const Projekt = () => {
    return ( 
        <div id="projektWrapper">
            <h1>
                Våra Projekt
            </h1>
            <ProjektList></ProjektList>
        </div>
    );
}

export default Projekt;