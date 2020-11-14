import {MDBDataTable} from "mdbreact";
import React from "react";
import citasImg from "./../../assets/img/cita.svg";
import borrar from "./../../assets/img/borrar.svg";
import mas from "./../../assets/img/mas.svg";
import lapizImg from "./../../assets/img/lapiz.svg";

const CitasTabla = ({citas, setCitas, traerCitas}) => {
  const data = {
    columns: [
      {label: "# Cita", field: "cita_id"},
      {label: "Propietario", field: "cita_propietario"},
      {label: "#Cel", field: "propietario_celular"},
      // {label: "Email", field: "propietario_email"},
      {label: "Lugar", field: "cita_lugar"},
      {label: "M. Pago", field: "cita_mpago"},
      {label: "Mascota", field: "cita_mascota"},
      {label: "Vacuna", field: "cita_vacunas"},
      {label: "Precio", field: "cita_precio"},
      {label: "Fecha", field: "cita_fecha"},
      {label: "Horario", field: "cita_horario"},
      {label: "Direccion", field: "cita_direccion"},
      {label: "Distrito", field: "cita_distrito"},
      {label: "Estado", field: "estado"},
      {label: "Acciones", field: "acciones"},
    ],
    rows: citas.map((c) => {
      return {
        ...c,
        acciones: (
          <>
            <button className="btn-acciones">
              <img src={lapizImg} className="svg1" />
            </button>
            <button className="btn-acciones" onClick={() => {}}>
              <img src={borrar} className="svg1" />
            </button>
            <button className="btn-acciones">
              <img src={mas} className="svg1" />
            </button>
          </>
        ),
      };
    }),
  };

  return (
    <section className="main__container row">
      <img src={citasImg} className="svg m-1" />
      <h1 className="svg m-1">Citas</h1>
      <div className="col-12">
        <div className="shadow">
          <div className="card-body">
            <MDBDataTable
              className="text-center"
              striped
              bordered
              hover
              responsive
              data={data}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitasTabla;
