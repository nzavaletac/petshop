import React from "react";
import ubicacionImg from "./../../../assets/img/ubicacion.svg";
import facebookImg from "./../../../assets/img/facebook.svg";
import instagramImg from "./../../../assets/img/instagram.svg";
import whatsappImg from "./../../../assets/img/whatsapp.svg";
import sobreImg from "./../../../assets/img/sobre.svg";

const PerfilFooter = () => {
  return (
    <footer className="container mt-4">
      <div className="row contactanos">
        <h4 className="titulos col-md-6">NUESTROS DATOS</h4>
        <h4 className="titulos col-md-4 "></h4>
        <h4 className="titulos col-md-2 ">SÍGUENOS</h4>

        <span className="col-md-1">
          <img src={ubicacionImg} width="50px" alt="" />
        </span>
        <span className="col-md-5">Av. Lima Nro. 653 - Lima - Peru</span>
        <span className="col-md-4"></span>
        <span className="col-md-1">
          <img src={facebookImg} width="50px" alt="" />
        </span>
        <span className="col-md-1">
          <img src={instagramImg} width="50px" alt="" />
        </span>
        <span className="col-md-1 mt-2">
          <img src={whatsappImg} width="50px" alt="" />
        </span>
        <span className="col-md-5 mt-2">+51 999 999 999</span>
        <span className="col-md-6"></span>
        <span className="col-md-1 mt-2">
          <img src={sobreImg} width="50px" alt="" />
        </span>
        <span className="col-md-5 mt-2">info@petshop.com</span>
        <span className="col-md-6"></span>

        <span className="col-md-8 mt-4">
          Copyright © 2020 PetShop Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default PerfilFooter;
