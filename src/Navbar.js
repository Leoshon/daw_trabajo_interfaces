import React, {useContext} from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logoOliva from "./assets/img/logoOliva.jpg";
import { FormattedMessage } from "react-intl";
import { langContext } from "./context/langContext";

const Navbar = () => {
  const idioma = useContext(langContext);
  
  return (
    <nav className="nav">
      <div>
        <img src={logoOliva} alt="logo" className="logo" />
        <Link to="/home" className="site-title">
          <FormattedMessage id="app.home" defaultMessage="Inicio" />
        </Link>
      </div>
      <ul className="nav-links">
        <CustomLink to="/about">
          <FormattedMessage id="app.about" defaultMessage="Quienes somos" />
        </CustomLink>
        <CustomLink to="/products">
          <FormattedMessage id="app.productos" defaultMessage="Productos" />
        </CustomLink>
        <CustomLink to="/contact">
          <FormattedMessage id="app.contact" defaultMessage="Contacta" />
        </CustomLink>
      </ul>
      <div className="lang">
        <button onClick={() => idioma.establishLang("en-US")}>EN</button>
        <button onClick={() => idioma.establishLang("es-ES")}>ES</button>
      </div>
    </nav>
  );
};
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={match ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
