import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        <h1 className="header__text">Movie Search</h1>
      </Link>
    </header>
  );
}

export default Header;
