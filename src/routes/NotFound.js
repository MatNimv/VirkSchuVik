import { Link } from "react-router-dom/cjs/react-router-dom.min";
import  fyraNollFyra  from '../media/404.svg'

const NotFound = () => {
    return ( 
        <div className="notFound">
            <img src={fyraNollFyra} alt="404 Sidan Hittades Inte"></img>
            <Link to="/"><button className="purpleBtn">Tillbaka</button></Link>
        </div>
    );
}

export default NotFound;