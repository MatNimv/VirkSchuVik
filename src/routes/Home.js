import ArticleList from "../components/ArticleList";
import HeaderVideo from "../components/Home/HeaderVideo";
import useFetch from "../functions/useFetch";
import '../styles/Home.css';


const Home = () => {

    //data kallas för articles i denna kontexten
    //const {data: articles, isLoading, error} = useFetch("http://localhost:8000/articles");

    return ( 
        <div id="homeWrapper">
            <HeaderVideo></HeaderVideo>
            <h2>Artiklar</h2>
            {/*{error && <div>{error}</div>}
            { isLoading && <div>Loading...</div>}
            {articles && <ArticleList articles={articles} ></ArticleList>}*/}
        </div>
    );
}

export default Home;