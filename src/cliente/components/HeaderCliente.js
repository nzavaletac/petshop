import React, {useState} from "react";
import usuarioImg from "./../../assets/img/usuario.svg";
import carritoImg from "./../../assets/img/carrito-de-compras.svg";
import logoImg from "./../../assets/img/LOGO.svg";
import indexImg from "./../../assets/img/animales_index.svg";
import {NavLink} from "react-bootstrap";
import ModalSesion from "./ModalSesion";
import ModalRegistro from "./ModalRegistro";
import ModalAdmin from "./ModalAdmin";

const HeaderCliente = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showRegistro, setShowRegistro] = useState(false);
  const handleCloseRegistro = () => setShowRegistro(false);
  const handleShowRegistro = () => setShowRegistro(true);

  const [showAdmin, setShowAdmin] = useState(false);
  const handleCloseAdmin = () => setShowAdmin(false);
  const handleShowAdmin = () => setShowAdmin(true);

  return (
    <>
      <ModalSesion
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        handleShowRegistro={handleShowRegistro}
      />
      <ModalRegistro
        showRegistro={showRegistro}
        handleCloseRegistro={handleCloseRegistro}
        handleShowRegistro={handleShowRegistro}
      />

      <ModalAdmin
        showAdmin={showAdmin}
        handleCloseAdmin={handleCloseAdmin}
        handleShowAdmin={handleShowAdmin}
      />
      <header>
        <nav>
          <div className="menu-icon">
            <i className="fa fa-bars fa-2x"></i>
          </div>

          <div className="menu">
            <ul>
              <li>
                <NavLink href="cliente/home" target>
                  NOSOTROS
                </NavLink>
              </li>
              <li>
                <NavLink href="cliente/home">SERVICIOS</NavLink>
              </li>
              <li>
                <NavLink href="cliente/home">TIENDA</NavLink>
              </li>
              <li>
                <NavLink href="/cliente/blog">BLOG</NavLink>
              </li>
              <li className="dropdown">
                <NavLink>INGRESE</NavLink>
                <div className="dropdown-content">
                  <NavLink onClick={handleShow} id="btnModalCliente">
                    CLIENTE
                  </NavLink>
                  <NavLink onClick={handleShowRegistro} id="btnModalCliente">
                    REGISTRO
                  </NavLink>
                  <NavLink onClick={handleShowAdmin} id="btnModalAdministrador">
                    ADMINISTRADOR
                  </NavLink>
                </div>
              </li>
              <li>
                <NavLink href="/cliente/perfil">
                  {/* <img src={carritoImg} alt="" /> */}
                  <img src={usuarioImg} alt="" />
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="header-img">
          <img src={logoImg} alt="" className="logoprincipal" />
          <img src={indexImg} alt="" className="imagenprincipal" />
        </div>
      </header>
    </>
  );
};

export default HeaderCliente;
