import { Link } from 'react-router-dom';
import logo from '../images/main-logo.jpg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
          src={logo}
          alt='logo'
          width={40}
          height={40}
          className="d-inline-block align-text-top me-2" />
        </a>
        <Link className="navbar-brand fs-3" to="/">Greekend Transfers</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link fs-5" to="/fleet">Fleet</Link></li>
            <li className="nav-item"><Link className="nav-link fs-5" to="/rental">Rental</Link></li>
            <li className="nav-item"><Link className="nav-link fs-5" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;
