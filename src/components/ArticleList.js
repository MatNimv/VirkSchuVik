const ArticleList = ({articles, handleDelete}) => {
    //const articles = props.article
    //console.log(handleDelete);

    return (
        <div className="articleList">
            {articles.map((art) => (
                <div className="article" key={art.id}>
                    <h4>{art.title}</h4>
                    <p>{art.body}</p>
                    <span> Skriven av: {art.author}</span>
                    <button onClick={() => handleDelete(art.id)}>ta bort inlägg</button>
                </div>
            ))}
        </div>
    );
}

export default ArticleList;