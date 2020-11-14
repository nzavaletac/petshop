import {MDBDataTable} from "mdbreact";
import React, {useState} from "react";
import Swal from "sweetalert2";
import borrar from "./../../assets/img/borrar.svg";
import lapizImg from "./../../assets/img/lapiz.svg";
import RazaForm from "./RazaForm";
import {deleteRazasXId} from "./services/mantenimientoService";

const RazaTabla = ({razas, setRazas, traerRazas}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const eliminarRazasXId = (id) => {
    Swal.fire({
      title: "¿Eliminar?",
      icon: "error",
      text: "¿Estás seguro de eliminar?",
      showCancelButton: true,
    }).then(({isConfirmed}) => {
      if (isConfirmed) {
        deleteRazasXId(id).then((data) => {
          if (data.propietario_id) {
            setRazas([]);
            traerRazas();
            Swal.fire({
              title: "Eliminado",
              text: "Raza eliminada correctamente",
              timer: 1500,
              icon: "success",
            });
          }
        });
      }
    });
  };

  const data = {
    columns: [
      {label: "ID", field: "raza_id"},
      {label: "Descripcion", field: "raza_nombre"},
      {label: "...", field: "acciones"},
    ],
    rows: razas.map((r) => {
      return {
        ...r,
        acciones: (
          <>
            <button className="btn-acciones">
              <img src={lapizImg} className="svg1" />
            </button>
            <button
              className="btn-acciones"
              onClick={() => {
                eliminarRazasXId(r.raza_id);
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
      <RazaForm show={show} handleClose={handleClose} handleShow={handleShow} />
      <div className="col-4">
        <div className="shadow">
          <div className="card-body row">
            <div className="row col-12">
              <h4 className="col-sm-8">Razas Mascotas</h4>
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

export default RazaTabla;
