import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="notFound">
            <p>sry hittas inte</p>
            <Link to="/">Hem igen</Link>
        </div>
     );
}
 
export default NotFound;