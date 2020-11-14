import React, {useState} from "react";
import {NavLink} from "react-bootstrap";
import logoImg from "./../../../assets/img/LOGO.svg";
import animalesImg from "./../../../assets/img/animales_cliente.png";
import ModalGromming from "../ModalGromming";
import ModalCita from "../ModalCita";

const PerfilHeader = () => {
  const [showCitas, setShowCitas] = useState(false);
  const handleCloseCitas = () => setShowCitas(false);
  const handleShowCitas = () => setShowCitas(true);

  const [showGromming, setShowGromming] = useState(false);

  const handleCloseGromming = () => setShowGromming(false);
  const handleShowGromming = () => setShowGromming(true);
  return (
    <>
      <ModalGromming
        showGromming={showGromming}
        handleCloseGromming={handleCloseGromming}
        handleShowGromming={handleShowGromming}
      />
      <ModalCita
        showCitas={showCitas}
        handleCloseCitas={handleCloseCitas}
        handleShowCitas={handleShowCitas}
      />
      <header>
        <nav>
          <div className="menu-icon">
            <i className="fa fa-bars fa-2x"></i>
          </div>

          <div className="menu">
            <ul>
              <li>
                <NavLink href="/cliente/home" target>
                  HOME
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink>RESERVA CITAS</NavLink>
                <div className="dropdown-content">
                  <NavLink onClick={handleShowCitas} id="btnModalVacuna">
                    VACUNA
                  </NavLink>
                  <NavLink onClick={handleShowGromming} id="btnModalVacuna">
                    GROMMING
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="header-img">
          <img src={logoImg} alt="" className="logoprincipal" />
          <img src={animalesImg} alt="" className="imagenprincipal" />
        </div>
      </header>
    </>
  );
};

export default PerfilHeader;
