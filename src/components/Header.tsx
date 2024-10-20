import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">PlantShop</div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Sklep</Link>
            </li>
            <li>
              <Link to="/aboutUs">O nas</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
