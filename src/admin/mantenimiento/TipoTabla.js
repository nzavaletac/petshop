import {MDBDataTable} from "mdbreact";
import React, {useState} from "react";
import Swal from "sweetalert2";
import borrar from "./../../assets/img/borrar.svg";
import lapizImg from "./../../assets/img/lapiz.svg";
import {deleteTiposXId} from "./services/mantenimientoService";
import TipoForm from "./TipoForm";

const TipoTabla = ({tipos, setTipos, traerTipos}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const eliminarTiposXId = (id) => {
    Swal.fire({
      title: "¿Eliminar?",
      icon: "error",
      text: "¿Estás seguro de eliminar?",
      showCancelButton: true,
    }).then(({isConfirmed}) => {
      if (isConfirmed) {
        deleteTiposXId(id).then((data) => {
          if (data.propietario_id) {
            setTipos([]);
            traerTipos();
            Swal.fire({
              title: "Eliminado",
              text: "Tipo de Mascota eliminado correctamente",
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
      {label: "ID", field: "tipo_id"},
      {label: "Descripcion", field: "tipo_nombre"},
      {label: "...", field: "acciones"},
    ],
    rows: tipos.map((t) => {
      return {
        ...t,
        acciones: (
          <>
            <button className="btn-acciones">
              <img src={lapizImg} className="svg1" />
            </button>
            <button
              className="btn-acciones"
              onClick={() => {
                eliminarTiposXId(t.tipo_id);
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
      <TipoForm show={show} handleClose={handleClose} handleShow={handleShow} />
      <div className="col-4">
        <div className="shadow">
          <div className="card-body row">
            <div className="row col-12">
              <h4 className="col-sm-8">Tipos Mascotas</h4>
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

export default TipoTabla;
