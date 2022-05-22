import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <div className='navigation'>
            <div className='nav-brand'>
                <Link to='/' className='nav-link'>
                    Videos
                </Link>
            </div>
        </div>
    )
}

export default Navigation;