import { Link } from 'react-router-dom';
import LoremIpsum from './LoremIpsum';

const Footer = () => {
    return ( 
        <footer>
            <div className="footerInfo">
                <img alt="V S V"></img>
                <LoremIpsum></LoremIpsum>
            </div>
            <div className="footerLinks stroke">
                <h4><Link to="/projekt">Projekt</Link></h4>
                <h4><Link to="/omOss">Om Oss</Link></h4>
                <h4><Link to="/kontakt">Kontakta Oss</Link></h4>
                <h4><Link to="/Login">Admin</Link></h4>
            </div>
        </footer>
    );
}

export default Footer;