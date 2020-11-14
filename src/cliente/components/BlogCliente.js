import React from "react";
import {NavLink} from "react-bootstrap";
import flechaDImg from "./../../assets/img/flecha_derecha.svg";

const BlogCliente = () => {
  return (
    <>
      <h4 className="titulos mt-4" id="blog">
        BLOG - TEMA DE LA SEMANA
      </h4>
      <section className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card text-center">
              <div className="card-body blog">
                <h2 className="card-title blog">CONVULSIONES EN PERROS</h2>
              </div>
            </div>
          </div>
          <figure className="flechaderecha">
            <NavLink href="./blog">
              <img src={flechaDImg} alt="" />
            </NavLink>
          </figure>
        </div>
      </section>
    </>
  );
};

export default BlogCliente;
