import React from "react";
import {NavLink} from "react-bootstrap";
import blogImg from "./../../../assets/img/blog_LOGO.svg";
import "./style_blog.css";

const BlogHeader = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
      <NavLink className="navbar-brand" href="/cliente/home">
        <img
          src={blogImg}
          width="85"
          height="85"
          className="title d-inline-block align-top"
          alt=""
          loading="lazy"
        />
        BLOG
      </NavLink>
      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-5">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              TEMAS
            </a>
            <div
              className="dropdown-menu color"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="#one">
                <strong>
                  CONVULSIONES EN PERROS: CAUSAS Y RECOMENDACIONES
                </strong>
              </a>
              <a className="dropdown-item" href="#two">
                <strong>
                  EL MOQUILLO EN PERROS: SÍNTOMAS, TRATAMIENTO Y CONTAGIO
                </strong>
              </a>
              <a className="dropdown-item" href="#three">
                <strong>
                  HERIDAS EN LAS ALMOHADILLAS DE PERROS: CAUSAS, TRATAMIENTO Y
                  PREVENCIONES
                </strong>
              </a>
              <a className="dropdown-item" href="#four">
                <strong>
                  RABIA EN PERROS: CONTAGIO, SÍNTOMAS Y PREVENCIÓN
                </strong>
              </a>
              <a className="dropdown-item" href="#five">
                <strong>
                  3 CONSEJOS PARA CONSERVAR BIEN EL ALIMENTO DE NUESTRAS
                  MASCOTAS
                </strong>
              </a>
              <a className="dropdown-item" href="#six">
                <strong>
                  BOTIQUÍN CASERO PARA MASCOTAS: TODO LO QUE DEBE INCLUIR
                </strong>
              </a>
              <a className="dropdown-item" href="#seven">
                <strong>
                  DESPARASITAR A UN PERRO, UN ESCUDO FRENTE A LAS ENFERMEDADES
                </strong>
              </a>
              <a className="dropdown-item" href="#eight">
                <strong>
                  CALENDARIO DE VACUNACIÓN HABITUAL PARA NUESTRO PERRO
                </strong>
              </a>
            </div>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default BlogHeader;
