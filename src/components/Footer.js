import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <footer>
            <div className="footerInfo">
                <img alt="V S V"></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa vel pharetra tempus. Maecenas sed vehicula diam, ac venenatis lectus. Aliquam id imperdiet lectus. Curabitur pretium orci in est consequat maximus.</p>
            </div>
            <div className="footerLinks stroke">
                <h4><Link to="/projekt">Projekt</Link></h4>
                <h4><Link to="/omOss">Om Oss</Link></h4>
                <h4><Link to="/kontakt">Kontakta Oss</Link></h4>
            </div>
        </footer>
    );
}

export default Footer;