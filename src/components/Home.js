import ArticleList from "./ArticleList";
import useFetch from "../functions/useFetch";

const Home = () => {

    //data kallas för articles i denna kontexten
    const {data: articles, isLoading, error} = useFetch("http://localhost:8000/articles");

    return ( 
        <div className="Hem">
            <h2>Artiklar</h2>
            {error && <div>{error}</div>}
            { isLoading && <div>Loading...</div>}
            {articles && <ArticleList articles={articles} ></ArticleList>}
        </div>
    );
}

export default Home;