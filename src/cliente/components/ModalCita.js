import React from "react";
import {Modal} from "react-bootstrap";

const ModalCita = ({showCitas, handleCloseCitas, handleShowCitas}) => {
  return (
    <>
      <Modal
        size="xl"
        show={showCitas}
        onHide={handleCloseCitas}
        backdrop="static"
        keyboard={false}
        className="panel"
      >
        <Modal.Header closeButton>
          <div className="col text-center">
            <h2 href="!#" id="register-form-link">
              <strong>VACUNA A DOMICILIO</strong>
            </h2>
          </div>
        </Modal.Header>

        <Modal.Body className="m-4">
          <div className="form-group row">
            <div className="col-sm-5">
              <select className="input-sesion-registro">
                <option value="0">--Elige a la mascota a vacunar--</option>
                <option>Copito</option>
                <option>Anastacia</option>
              </select>
            </div>
            <div className="col-sm-5">
              <select className="input-sesion-registro">
                <option value="0">--Vacunas disponibles--</option>
                <option>Vacuna Parvovirus</option>
                <option>Vacuna Dispenter</option>
                <option>Vacuna Hepatitis</option>
                <option>Vacuna Leptospirosis</option>
                <option>Vacuna Rabia</option>
                <option>Desparasitación</option>
              </select>
            </div>
            <div className="col-sm-2">
              <input
                type="text"
                className="input-sesion-registro"
                placeholder="S/ 45.00"
                readOnly
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4" for="">
              Selecciona la fecha y hora para la reserva
            </label>
            <div className="col-sm-4">
              <input
                type="date"
                className="input-sesion-registro"
                placeholder="Email"
              />
            </div>
            <div className="col-sm-4">
              <select className="input-sesion-registro">
                <option value="0">--Horarios Disponibles--</option>
                <option>08:00 am</option>
                <option>09:00 am</option>
                <option>10:00 am</option>
                <option>11:00 am</option>
                <option>12:00 pm</option>
                <option>02:00 pm</option>
                <option>03:00 pm</option>
                <option>04:00pm</option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input
                type="text"
                className="input-sesion-registro"
                placeholder="Direccion donde se realizará el servico de vacunación"
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-4">
              <select className="input-sesion-registro">
                <option>-Distrito-</option>
                <option>Lima</option>
              </select>
            </div>
            <div className="col-sm-4">
              <select className="input-sesion-registro">
                <option value="0">-Provincia-</option>
                <option>Lima</option>
              </select>
            </div>
            <div className="col-sm-4">
              <select className="input-sesion-registro">
                <option value="0">-Departamento-</option>
                <option value="1">Lima</option>
              </select>
            </div>
          </div>

          {/* <div className="form-group row">
            <label className="col-sm-12" for="">
              Seleccion tu direccion en el mapa
            </label>
          </div> */}

          <div className="form-group text-center">
            <button
              type="button"
              className="btn-principal"
              onclick="window.location.href='./cliente.html'"
            >
              REGISTRAR CITA
            </button>
            <button
              type="button"
              className="btn-secundario"
              data-dismiss="modal"
              onClick={handleCloseCitas}
            >
              CANCELAR
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalCita;
