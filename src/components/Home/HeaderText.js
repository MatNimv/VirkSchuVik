import { Link } from 'react-router-dom';
import LoremIpsum from '../LoremIpsum';

const HeaderText = () => {
    return ( 
        <div className='introWrapper'>
            <div>
            <Link to="/projekt">
                <button>
                    Se Våra Skapelser
                </button>
            </Link>
                <LoremIpsum></LoremIpsum>
            </div>
        <h1>VirkSchuVik</h1>
    </div>
    );
}

export default HeaderText;