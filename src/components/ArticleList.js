import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ArticleList = ({articles}) => {
    //const articles = props.article
    //console.log(handleDelete);

    return (
        <div className="articleList">
            {articles.map((art) => (
                <div className="article" key={art.id}>
                    <Link to={`/articles/${art.id}`}>
                        <h4>{art.title}</h4>
                        <p>{art.body}</p>
                        <span> Skriven av: {art.author}</span>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ArticleList;