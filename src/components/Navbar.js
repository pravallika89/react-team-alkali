import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <a className='navbar-brand' href='#'>
          The Members of Team Alkali
        </a>
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
                <Link className="nav-link" to="/Members">
                    Members
                </Link>
                <Link className="nav-link" to="/Member">
                    Member 
                </Link>
          </div>
        </div>
      </nav>
    );
  };
  export default Navbar;