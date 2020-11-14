import React from "react";
import {Modal, NavLink} from "react-bootstrap";
import logoImg from "./../../assets/img/LOGO.svg";
import emailImg from "./../../assets/img/email.svg";
import passwordImg from "./../../assets/img/password.svg";

const ModalSesion = ({show, handleShow, handleClose, handleShowRegistro}) => {
  return (
    <>
      <Modal
        // size="lg"
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        className="panel"
      >
        <Modal.Header closeButton>
          <div className="col text-center">
            <h2 href="!#" id="register-form-link">
              <strong>INICIA SESIÓN</strong>
            </h2>
          </div>
        </Modal.Header>

        <Modal.Body className="m-4">
          {/* <div className="form-group">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center col-lg-12">
                  <img src={logoImg} />
                </div>
              </div>
            </div>
          </div> */}

          <div className="form-group row">
            <img src={emailImg} className="col-sm-2 svg" />
            <div className="col-sm-10">
              <input
                type="text"
                name="emailSesion"
                id="emailSesion"
                className="input-sesion-registro"
                placeholder="Ingresa tu email"
              />
            </div>
          </div>

          <div className="form-group row">
            <img src={passwordImg} className="col-sm-2 svg" />
            <div className="col-sm-10">
              <input
                type="password"
                id="password"
                className="input-sesion-registro"
                placeholder="Ingresa tu password"
              />
            </div>
          </div>

          <div className="form-group text-center">
            <input type="checkbox" name="remember" id="remember" />
            <label for="remember"> Recordarme</label>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <a href="#">¿Has olvidado tu contraseña?</a>
                </div>
              </div>
            </div>
          </div>

          <div className="form-group text-center">
            <button type="button" className="btn-principal">
              LOGIN
            </button>
            <button
              type="button"
              className="btn-secundario"
              data-dismiss="modal"
              onClick={handleClose}
            >
              CLOSE
            </button>
          </div>
          <div className="col text-center">
            <label>¿Aún no tienes una cuenta?</label>
            <NavLink onClick={handleShowRegistro}>Registrate aquí</NavLink>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalSesion;
