import React from "react";
import unicacionImg from "./../../assets/img/ubicacion.svg";
import facebookImg from "./../../assets/img/facebook.svg";
import instagramImg from "./../../assets/img/instagram.svg";
import cartaImg from "./../../assets/img/sobre.svg";
import whatsappImg from "./../../assets/img/whatsapp.svg";

const FooterCliente = () => {
  return (
    <footer class="container mt-4">
      <span class="row contactanos">
        <h4 class="titulos col-md-6">NUESTROS DATOS</h4>
        <h4 class="titulos col-md-4 "></h4>
        <h4 class="titulos col-md-2 ">SÍGUENOS</h4>

        <span class="col-md-1">
          <img src={unicacionImg} width="50px" alt="" />
        </span>
        <span class="col-md-5">Av. Lima Nro. 653 - Lima - Peru</span>
        <span class="col-md-4"></span>
        <span class="col-md-1">
          <img src={facebookImg} width="50px" alt="" />
        </span>
        <span class="col-md-1">
          <img src={instagramImg} width="50px" alt="" />
        </span>
        <span class="col-md-1 mt-2">
          <img src={whatsappImg} width="50px" alt="" />
        </span>
        <span class="col-md-5 mt-2">+51 999 999 999</span>
        <span class="col-md-6"></span>
        <span class="col-md-1 mt-2">
          <img src={cartaImg} width="50px" alt="" />
        </span>
        <span class="col-md-5 mt-2">info@petshop.com</span>
        <span class="col-md-6"></span>

        <span class="col-md-8 mt-4">
          Copyright © 2020 PetShop Todos los derechos reservados.
        </span>
      </span>
    </footer>
  );
};

export default FooterCliente;
