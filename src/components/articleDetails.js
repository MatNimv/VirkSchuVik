import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../functions/useFetch";


const ArticleDetails = () => {
    const {id} = useParams();
    const {data: article, error, isLoading} = useFetch('http://localhost:8000/articles/' + id);
    const history = useHistory();

    const handleClick= () => {
        fetch("http://localhost:8000/articles/" + id, {
            method: 'DELETE'
        }).then(()=> {
            history.push('/');
        })
    }

    return ( 
        <div>
            <h2>Blog Details - {id}</h2>
            {isLoading && <div>...Loading</div>}
            {error && <div>{error}</div>}
            {article && (
                <article>
                    <h2>{article.title}</h2>
                    <p>skriven av: {article.author}</p>
                    <div>{article.body}</div>
                    <button onClick={handleClick}>ta bort</button>
                </article>
            )}
        </div>
    );
}

export default ArticleDetails;