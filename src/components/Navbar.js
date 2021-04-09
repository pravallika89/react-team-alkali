import {Link} from 'react-router-dom';
import logo from '../data/logo.png'

const Navbar = () => {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark  bg-primary'>
        <Link className='navbar-brand ' to='/'>
            {/* Team Alkali */}
            <img  className='logo'src={logo} alt='Logo'/>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
                <Link className="nav-link" to="/">
                    Home
                </Link>
                <Link className="nav-link" to="/members">
                    Members
                </Link>
                <Link className="nav-link" to="/addmember">
                    Join
                </Link>
          </div>
        </div>
      </nav>
    );
  };
  export default Navbar;