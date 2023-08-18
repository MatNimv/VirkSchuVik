import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Kajjan');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const article = {title, body, author};
        console.log(article);

        setIsLoading(true);
        
        fetch("http://localhost:8000/articles", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(article)
        }).then(() => {
            console.log('nytt');
            setIsLoading(false);
            //history.go(-1)
            history.push('/');
        })

        
    }

    return ( 
        <div>
            <h2>Skapa en till artikel</h2>
            <form onSubmit={handleSubmit}>
                <label>Artikel titel:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <label>Artikel text:</label>
                <input type="textarea" required value={body} onChange={(e) => setBody(e.target.value)}></input>
                <label>Författare:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Kajjan"></option>
                    <option value="Luce"></option>
                    <option value="Matlda"></option>
                </select>
                {!isLoading && <button>Lägg till</button>}
                {isLoading && <button disabled>Lägger till...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}

export default Create;