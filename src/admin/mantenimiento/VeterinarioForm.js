import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import {postVeterinarioForm} from "./services/mantenimientoService";
import "./style.css";

const formularioVacio = {
  veterinario_nomb_ape: "",
  veterinario_telefono: "",
  veterinario_email: "",
};

const VeterinarioForm = ({show, handleShow, handleClose}) => {
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
    postVeterinarioForm(formulario).then((data) => {
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
                <strong>Registrar Veterinario</strong>
              </h2>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="m-4">
          {/* <hr class="hr-sesion" /> */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="nomVet">Nombres y Apellidos</label>
              <input
                type="text"
                className="input-sesion-registro"
                id="nomVet"
                placeholder="Ingresa nombres y apellidos"
                onChange={handleChange}
                name="veterinario_nomb_ape"
                value={formulario.veterinario_nomb_ape}
              />
            </div>
            <div className="form-group">
              <label for="celVet">Nro. Celular</label>
              <input
                type="text"
                className="input-sesion-registro"
                id="celVet"
                placeholder="Ingresa Nro. Celular"
                onChange={handleChange}
                name="veterinario_telefono"
                value={formulario.veterinario_telefono}
              />
            </div>
            <div className="form-group">
              <label for="emailVet">Correo</label>
              <input
                type="text"
                className="input-sesion-registro"
                id="emailVet"
                placeholder="ejemplo@dominio.com"
                onChange={handleChange}
                name="veterinario_email"
                value={formulario.veterinario_email}
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

export default VeterinarioForm;
