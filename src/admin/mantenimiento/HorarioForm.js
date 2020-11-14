import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {postHorarioForm} from "./services/mantenimientoService";
import "./style.css";

const formularioVacio = {
  horario_descripcion: "",
};

const HorarioForm = ({show, handleShow, handleClose}) => {
  const [formulario, SetFormulario] = useState(formularioVacio);

  const handleChange = (e) => {
    let valor =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    SetFormulario({
      ...formulario,
      [e.target.name]: valor,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postHorarioForm(formulario).then((data) => {
      SetFormulario(formularioVacio);
    });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="panel"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="col text-center">
              <h2 href="!#" id="register-form-link">
                <strong>Registrar Horario</strong>
              </h2>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="m-4">
          {/* <hr class="hr-sesion" /> */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="nomdes">Descripcion</label>
              <input
                type="text"
                className="input-sesion-registro"
                id="nomdes"
                placeholder="Ingrese Horario"
                onChange={handleChange}
                name="horario_descripcion"
                value={formulario.horario_descripcion}
              />
            </div>
            <div className="col text-center">
              <div className="form-group text-center mr-4">
                <button type="submit" className="btn btn-outline-primary">
                  Registrar
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger ml-4"
                  data-dismiss="modal"
                  onClick={handleClose}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
        {/* <Modal.Footer></Modal.Footer> */}
      </Modal>
    </>
  );
};

export default HorarioForm;
