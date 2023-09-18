import HeaderVideo from "../components/Home/HeaderVideo";
import ProjektGrid from "../components/Home/ProjektGrid";
import '../styles/Home.css';

const Home = () => {

    return ( 
        <div id="homeWrapper">
            <HeaderVideo></HeaderVideo>
            <h2>Artiklar</h2>
            <ProjektGrid></ProjektGrid>
        </div>
    );
}

export default Home;