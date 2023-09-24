import ProjektGrid from "../components/Home/ProjektGrid";
import HeaderVideo from "../components/Home/HeaderVideo";
import '../styles/Home.css';

const Home = () => {

    return ( 
        <div id="homeWrapper">
            <HeaderVideo></HeaderVideo>
            <h2>Några Utvalda Inlägg</h2>
            <ProjektGrid></ProjektGrid>
        </div>
    );
}

export default Home;