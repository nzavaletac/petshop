import React from "react";
import "./../components/stylessCliente.css";
import "./../components/perfilComponents/stylesPerfil.css";
import huellasImg from "./../../assets/img/huellas_marron.png";
import HeaderCliente from "./HeaderCliente";
import NosotrosCliente from "./NosotrosCliente";
import ServiciosCliente from "./ServiciosCliente";
import TiendaCliente from "./TiendaCliente";
import BlogCliente from "./BlogCliente";
import FooterCliente from "./FooterCliente";

const ClienteHome = () => {
  return (
    <>
      <HeaderCliente />

      <main className="container">
        <aside className="aside_lateral">
          <img src={huellasImg} alt="" />
        </aside>

        <NosotrosCliente />
        <ServiciosCliente />
        <TiendaCliente />
        <BlogCliente />
        <FooterCliente />
      </main>
    </>
  );
};

export default ClienteHome;
