import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/header.css";

function Header() {
  return (
    <div className="kasa-header">
      <img className="kasa-logo" src={logo} alt="cover" />
      <nav className="kasa-nav">
        <Link className="home" to="/">
          Accueil
        </Link>
        <Link className="apropos" to="/Apropos">
          A Propos
        </Link>
      </nav>
    </div>
  );
}

export default Header;
