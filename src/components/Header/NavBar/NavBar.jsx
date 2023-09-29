import { NavLink } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <NavLink to="/" activeclassname="active">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/animaux" activeclassname="active">
            Animaux
          </NavLink>
        </li>
        <li>
          <NavLink to="/timeline">Chronologie</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
