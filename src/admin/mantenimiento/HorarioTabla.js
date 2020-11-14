import {MDBDataTable} from "mdbreact";
import React, {useState} from "react";
import Swal from "sweetalert2";
import borrar from "./../../assets/img/borrar.svg";
import lapizImg from "./../../assets/img/lapiz.svg";
import HorarioForm from "./HorarioForm";
import {deleteHorariosXId} from "./services/mantenimientoService";

const HorarioTabla = ({horarios, setHorarios, traerHorarios}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const eliminarHorariosXId = (id) => {
    Swal.fire({
      title: "¿Eliminar?",
      icon: "error",
      text: "¿Estás seguro de eliminar?",
      showCancelButton: true,
    }).then(({isConfirmed}) => {
      if (isConfirmed) {
        deleteHorariosXId(id).then((data) => {
          if (data.propietario_id) {
            setHorarios([]);
            traerHorarios();
            Swal.fire({
              title: "Eliminado",
              text: "Horario eliminado correctamente",
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
      {label: "ID", field: "horario_id"},
      {label: "Descripcion", field: "horario_descripcion"},
      {label: "...", field: "acciones"},
    ],
    rows: horarios.map((h) => {
      return {
        ...h,
        acciones: (
          <>
            <button className="btn-acciones">
              <img src={lapizImg} className="svg1" />
            </button>
            <button
              className="btn-acciones"
              onClick={() => {
                eliminarHorariosXId(h.horario_id);
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
      <HorarioForm
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
      <div className="col-5">
        <div className="shadow">
          <div className="card-body row">
            <div className="row col-12">
              <h4 className="col-sm-8">Horarios</h4>
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

export default HorarioTabla;
