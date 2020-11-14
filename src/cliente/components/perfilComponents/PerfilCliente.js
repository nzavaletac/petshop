import React from "react";
import PerfilCalendario from "./PerfilCalendario";
import PerfilFooter from "./PerfilFooter";
import PerfilHeader from "./PerfilHeader";
import PerfilMascotas from "./PerfilMascotas";
import PerfilPropietario from "./PerfilPropietario";

const PerfilCliente = () => {
  return (
    <>
      <PerfilHeader />
      <main class="container">
        <PerfilPropietario />
        <PerfilMascotas />
        <PerfilCalendario />
        <PerfilFooter />
      </main>
    </>
  );
};

export default PerfilCliente;
