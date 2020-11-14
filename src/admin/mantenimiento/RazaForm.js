import React, {useState} from "react";
import "./style.css";
import {Button, Modal} from "react-bootstrap";
import {postRazaForm} from "./services/mantenimientoService";

const formularioVacio = {
  raza_nombre: "",
};

const RazaForm = ({show, handleShow, handleClose}) => {
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
    postRazaForm(formulario).then((data) => {
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
                <strong>Registrar Raza de Mascota</strong>
              </h2>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="m-4">
          {/* <hr class="hr-sesion" /> */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="desVet">Descripcion</label>
              <input
                type="text"
                className="input-sesion-registro"
                id="desVet"
                placeholder="Ingrese descripcion"
                onChange={handleChange}
                name="raza_nombre"
                value={formulario.raza_nombre}
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

export default RazaForm;
