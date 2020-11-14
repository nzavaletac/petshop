import React from "react";
import {Modal, NavLink} from "react-bootstrap";
import passwordImg from "./../../assets/img/password.svg";
import perfilAdminImg from "./../../assets/img/perfil_adm.svg";
import logoChicoImg from "./../../assets/img/LOGO_chico.svg";

const ModalAdmin = ({showAdmin, handleCloseAdmin, handleShowAdmin}) => {
  return (
    <>
      <Modal
        // size="lg"
        show={showAdmin}
        onHide={handleCloseAdmin}
        backdrop="static"
        keyboard={false}
        className="panel"
      >
        <Modal.Header closeButton>
          <div className="col text-center">
            <h2 href="!#" id="register-form-link">
              <strong>ADMINISTRADOR</strong>
            </h2>
          </div>
        </Modal.Header>
        <Modal.Body className="m-4">
          <div className="form-group">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center col-lg-12">
                  <img src={logoChicoImg} />
                  <p />
                </div>
              </div>
            </div>
          </div>

          <div className="form-group row">
            <img src={perfilAdminImg} className="col-sm-2 svg" />
            <div className="col-sm-10">
              <input
                type="text"
                name="emailSesion"
                id="emailSesion"
                className="input-sesion-registro"
                placeholder="Usuario"
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
                placeholder="Password"
              />
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
              onClick={handleCloseAdmin}
            >
              CLOSE
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ModalAdmin;
