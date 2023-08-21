import { Link } from 'react-router-dom';

const HeaderText = () => {
    return ( 
        <div className='introWrapper'>
            <div>
            <Link to="/projekt">
                <button>
                    Se Våra Skapelser
                </button>
            </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa vel pharetra tempus. Maecenas sed vehicula diam, ac venenatis lectus. Aliquam id imperdiet lectus. Curabitur pretium orci in est consequat maximus. Pellentesque finibus enim nec neque pellentesque, sit amet maximus lorem posuere.</p>
            </div>
        <h1>VirkSchuVik</h1>
    </div>
    );
}

export default HeaderText;