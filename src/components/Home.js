import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";

const Home = () => {

    const [articles, setArticles] = useState(null);

    const handleDelete = (id) => {
        const newArticles = articles.filter(art => art.id !== id);
        setArticles(newArticles);
    }

    useEffect(() => {
        console.log('use effect');

        fetch("http://localhost:3000/articles")
            .then(response => {
                console.log(response);
                return response.json()
            })
            .then((data) => {
                console.log(data);
            })
    }, []);


    return ( 
        <div className="Hem">
            <h2>Artiklar</h2>
            {/*<ArticleList articles={articles} handleDelete={handleDelete}></ArticleList>*/}
        </div>
    );
}

export default Home;