import {MDBDataTable} from "mdbreact";
import React, {useState} from "react";
import Swal from "sweetalert2";
import borrar from "./../../assets/img/borrar.svg";
import lapizImg from "./../../assets/img/lapiz.svg";
import {deleteVacunasXId} from "./services/mantenimientoService";
import VacunasForm from "./VacunasForm";

const VacunasTabla = ({vacunas, setVacunas, traerVacunas}) => {
  const eliminarVacunasXId = (id) => {
    Swal.fire({
      title: "¿Eliminar?",
      icon: "error",
      text: "¿Estás seguro de eliminar?",
      showCancelButton: true,
    }).then(({isConfirmed}) => {
      if (isConfirmed) {
        deleteVacunasXId(id).then((data) => {
          if (data.propietario_id) {
            setVacunas([]);
            traerVacunas();
            Swal.fire({
              title: "Eliminado",
              text: "vacuna eliminada correctamente",
              timer: 1500,
              icon: "success",
            });
          }
        });
      }
    });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const data = {
    columns: [
      {label: "ID", field: "vacuna_id"},
      {label: "Nombre", field: "vacuna_nombre"},
      {label: "Precio", field: "vacuna_precio"},
      {label: "...", field: "acciones"},
    ],
    rows: vacunas.map((v) => {
      return {
        ...v,
        acciones: (
          <>
            <button className="btn-acciones">
              <img src={lapizImg} className="svg1" />
            </button>
            <button
              className="btn-acciones"
              onClick={() => {
                eliminarVacunasXId(v.vacuna_id);
              }}
            >
              <img src={borrar} className="svg1" />
            </button>
          </>
        ),
      };
    }),
  };

  return (
    <>
      <VacunasForm
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
      <div className="col-4">
        <div className="shadow">
          <div className="card-body row">
            <div className="row col-12">
              {/* <img src={mantImg} className="svg2 col-sm-3" /> */}
              <h4 className="col-sm-8">Vacunas</h4>
              <button
                className="col-sm-4 btn btn-outline-primary text-center"
                onClick={handleShow}
              >
                Nuevo
              </button>
            </div>
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
    </>
  );
};

export default VacunasTabla;
