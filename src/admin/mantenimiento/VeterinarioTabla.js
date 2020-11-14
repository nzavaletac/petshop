import {MDBDataTable} from "mdbreact";
import React, {useState} from "react";
import Swal from "sweetalert2";
import borrar from "./../../assets/img/borrar.svg";
import lapizImg from "./../../assets/img/lapiz.svg";
import {deleteVeterinarioXId} from "./services/mantenimientoService";
import VeterinarioForm from "./VeterinarioForm";

const VeterinarioTabla = ({
  veterinarios,
  setVeterinarios,
  traerVeterinarios,
}) => {
  const eliminarVeterinarioXId = (id) => {
    Swal.fire({
      title: "¿Eliminar?",
      icon: "error",
      text: "¿Estás seguro de eliminar?",
      showCancelButton: true,
    }).then(({isConfirmed}) => {
      if (isConfirmed) {
        deleteVeterinarioXId(id).then((data) => {
          if (data.propietario_id) {
            setVeterinarios([]);
            traerVeterinarios();
            Swal.fire({
              title: "Eliminado",
              text: "Veterinario eliminado correctamente",
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
      {label: "ID", field: "veterinario_id"},
      {label: "Nombres y Apellidos", field: "veterinario_nomb_ape"},
      {label: "Celular", field: "veterinario_telefono"},
      {label: "Email", field: "veterinario_email"},
      {label: "...", field: "acciones"},
    ],
    rows: veterinarios.map((v) => {
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
                eliminarVeterinarioXId(v.veterinario_id);
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
      <VeterinarioForm
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
      <div className="col-7">
        <div className="shadow">
          <div className="card-body row">
            <div className="row col-12">
              {/* <img src={mantImg} className="svg2 col-sm-3" /> */}
              <h4 className="col-sm-8">Veterinarios</h4>
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

export default VeterinarioTabla;
