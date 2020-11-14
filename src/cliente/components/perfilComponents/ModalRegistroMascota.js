import React from "react";
import {Modal} from "react-bootstrap";
import perrologoImg from "./../../../assets/img/perrologo.svg";
import pistaImg from "./../../../assets/img/pista.svg";
import gatoFelizImg from "./../../../assets/img/gatoFeliz.svg";
import perroRegistroImg from "./../../../assets/img/perroregistro.svg";
import tortaImg from "./../../../assets/img/torta-de-cumpleanos.svg";
import sexoImg from "./../../../assets/img/sexo.svg";
import pintarImg from "./../../../assets/img/pintar.svg";
import tintaImg from "./../../../assets/img/tinta.svg";
import camaraImg from "./../../../assets/img/camara.svg";

const ModalRegistroMascota = ({
  showRegistroMascota,
  handleCloseRegistroMascota,
  handleShowRegistroMascota,
}) => {
  return (
    <>
      <Modal
        size="lg"
        show={showRegistroMascota}
        onHide={handleCloseRegistroMascota}
        backdrop="static"
        keyboard={false}
        className="panel"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title></Modal.Title> */}
          <div className="col text-center">
            <h2 href="!#" id="register-form-link">
              <strong>REGISTRA A TU MASCOTA</strong>
            </h2>
          </div>
        </Modal.Header>

        <Modal.Body className="m-4">
          <div className="form-group">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center col-lg-12">
                  <img src={perrologoImg} className="svg" />
                  <h5>Datos de tu mascota</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="form-group row">
            <img src={pistaImg} className="col-sm-2 svg" />
            <div className="col-sm-10">
              <input
                type="text"
                name="nombreMascota"
                id="nombreMascota"
                className="input-sesion-registro"
                placeholder="Ingresa el nombre de tu mascota"
              />
            </div>
          </div>

          <div className="form-group row">
            <img src={gatoFelizImg} className="col-sm-2 svg" />
            <div className="col-sm-4">
              <select className="input-sesion-registro">
                <option value="0">-Tipo mascota-</option>
                <option>Perro</option>
              </select>
            </div>
            <img src={perroRegistroImg} class="col-sm-2 svg" />
            <div class="col-sm-4">
              <select class="input-sesion-registro">
                <option value="0">-Raza-</option>
                <option>Otros</option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <img src={tortaImg} className="col-sm-2 svg" />
            <div className="col-sm-4">
              <input
                type="text"
                name="edadMascota"
                id="edadMascota"
                className="input-sesion-registro"
                placeholder="Edad de tu Mascota"
              />
            </div>
            <img src={sexoImg} className="col-sm-2 svg" />
            <div className="col-sm-4">
              <div className="custom-control custom-radio custom-control-inline col-sm-4">
                <input
                  type="radio"
                  id="macho"
                  className="custom-control-input"
                  name="sexo"
                />
                <label className="custom-control-label" for="macho">
                  Macho
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline col-sm-4">
                <input
                  type="radio"
                  id="hembra"
                  className="custom-control-input"
                  name="sexo"
                />
                <label className="custom-control-label" for="hembra">
                  Hembra
                </label>
              </div>
            </div>
          </div>

          <div className="form-group row">
            <img src={pintarImg} className="col-sm-2 svg" />
            <label className="col-sm-10" for="">
              Elige hasta 3 colores de tu mascota
            </label>
          </div>

          <div className="form-group row">
            <img src={tintaImg} className="col-sm-2 svg" />
            <div className="col-sm-10">
              <div className="form-check form-check-inline">
                <label
                  className="form-check-label col-sm-7"
                  for="inlineCheckbox1"
                >
                  Negro
                </label>
                <input
                  className="form-check-input col-sm-7"
                  type="checkbox"
                  id=""
                  value=""
                />
              </div>
              <div className="form-check form-check-inline">
                <label
                  className="form-check-label col-sm-7"
                  for="inlineCheckbox2"
                >
                  Blanco
                </label>
                <input
                  className="form-check-input col-sm-7"
                  type="checkbox"
                  id=""
                  value=""
                />
              </div>
              <div className="form-check form-check-inline">
                <label
                  className="form-check-label col-sm-7"
                  for="inlineCheckbox1"
                >
                  Marrón
                </label>
                <input
                  className="form-check-input col-sm-7"
                  type="checkbox"
                  id=""
                  value=""
                />
              </div>
              <div className="form-check form-check-inline">
                <label
                  className="form-check-label col-sm-7"
                  for="inlineCheckbox1"
                >
                  Gris
                </label>
                <input
                  className="form-check-input col-sm-7"
                  type="checkbox"
                  id=""
                  value=""
                />
              </div>
              <div className="form-check form-check-inline">
                <label
                  className="form-check-label col-sm-7"
                  for="inlineCheckbox1"
                >
                  Otros
                </label>
                <input
                  className="form-check-input col-sm-7"
                  type="checkbox"
                  id=""
                  value=""
                />
              </div>
            </div>
          </div>

          <div className="form-group row mb-4">
            <img src={camaraImg} className="col-sm-2 svg" />
            <div className="col-sm-10 custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
              />
              <label className="custom-file-label" for="customFile">
                Subir imagen
              </label>
            </div>
          </div>

          <div className="form-group text-center">
            <button type="button" className="btn-principal">
              REGISTRAR
            </button>
            <button
              type="button"
              className="btn-secundario"
              data-dismiss="modal"
              onClick={handleCloseRegistroMascota}
            >
              CANCELAR
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalRegistroMascota;
