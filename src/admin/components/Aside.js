import React from "react";
import usuarioAside from "./../../assets/img/usuario-de-perfil.svg";
import cliente from "./../../assets/img/clientes.svg";
import cita from "./../../assets/img/cita.svg";
import mantenimiento from "./../../assets/img/mantenimiento.svg";
import blog from "./../../assets/img/blog.svg";
import {NavLink} from "react-router-dom";

const Aside = () => {
  return (
    <aside className="main__menu">
      <div className="col-sm-12 text-center mb-5">
        <span className="">Noe Zavaleta</span>
      </div>
      <div className="col-sm-12 text-center mb-5">
        <span className="">nzavaletac@gmail.com</span>
      </div>
      <div className="col-sm-12 text-center mb-5">
        <img src={usuarioAside} className="svg" />
      </div>
      <div className="col-sm-12">
        <h5 className="">APLICACIONES</h5>
      </div>
      <ul className="main__list">
        <li className="main__item col-sm-12 nav-item">
          <img src={cliente} className="svg col-sm-4" />
          {/* <span className="col-sm-9">Clientes</span> */}
          <NavLink
            to={"/admin/clientes"}
            exact
            className="col-sm-9 nav-link"
            activeClassName="active"
          >
            Clientes
          </NavLink>
        </li>
        <li className="main__item col-sm-12 nav-item">
          <img src={cita} className="svg col-sm-4" />
          <NavLink
            to={"/admin/citas"}
            exact
            className="col-sm-9 nav-link"
            activeClassName="active"
          >
            Citas
          </NavLink>
        </li>
        <li className="main__item col-sm-12 nav-item">
          <img src={mantenimiento} className="svg col-sm-4" />
          <NavLink
            to={"/admin/mantenimiento"}
            exact
            className="col-sm-9 nav-link"
            activeClassName="active"
          >
            Mant. Servicios
          </NavLink>
        </li>
        <li className="main__item col-sm-12">
          <img src={blog} className="svg col-sm-4" />
          <NavLink
            to={"/admin"}
            exact
            className="col-sm-9 nav-link"
            activeClassName="active"
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
