import React from "react";
import "./administrador.css";
import logo from "./../../assets/img/logo.png";
import usuario from "./../../assets/img/usuario-de-perfil.svg";
import {NavLink} from "react-bootstrap";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink
          to={"/cliente/home"}
          exact
          className="nav-link"
          activeClassName="active"
        >
          <img src={logo} className="" />
        </NavLink>
      </div>
      <nav>
        <div className="menu">
          <ul className="ulAdmin">
            <li>
              {/* <a href="cliente/home" target>
                NOSOTROS
              </a> */}
            </li>
            <li className="dropdown">
              <NavLink>Hola Noe!</NavLink>
              <div className="dropdown-content">
                <NavLink id="btnModalCliente">Ver Perfil</NavLink>
                <NavLink id="btnModalCliente">Cerrar Sesion</NavLink>
                {/* <NavLink id="btnModalCliente">Setting</NavLink> */}
              </div>
            </li>
            <li>
              <a href="/admin">
                <img src={usuario} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
