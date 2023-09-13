import HeaderVideo from "../components/Home/HeaderVideo";
import ProjektGrid from "../components/Home/ProjektGrid";
import '../styles/Home.css';

const Home = () => {

    //data kallas för articles i denna kontexten
    //const {data: articles, isLoading, error} = useFetch("http://localhost:8000/articles");

    return ( 
        <div id="homeWrapper">
            <HeaderVideo></HeaderVideo>
            <h1>Några Utvalda Projekt</h1>
            <ProjektGrid></ProjektGrid>
            {/*{error && <div>{error}</div>}
            { isLoading && <div>Loading...</div>}
            {articles && <ArticleList articles={articles} ></ArticleList>}*/}
        </div>
    );
}

export default Home;