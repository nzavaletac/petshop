import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import peluqueroImg from "./../../assets/img/peluquero.png";
import usuarioImg from "./../../assets/img/usuario.svg";
import iphoneImg from "./../../assets/img/iphone.svg";
import identificacionImg from "./../../assets/img/identificacion.svg";
import emailImg from "./../../assets/img/email.svg";
import passwordImg from "./../../assets/img/password.svg";
import direccionImg from "./../../assets/img/direccion.svg";
import {postPropietarioForm} from "../services/clienteServices";

const formularioVacio = {
  propietario_nombre: "",
  propietario_apellidos: "",
  propietario_celular: "",
  propietario_fijo: "",
  propietario_dni: "",
  propietario_email: "",
  propietario_password: "",
  propietario_direccion: "",
  propietario_menor: "",
};

const ModalRegistro = ({
  showRegistro,
  handleCloseRegistro,
  handleShowRegistro,
}) => {
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
    postPropietarioForm(formulario).then((data) => {
      SetFormulario(formularioVacio);
    });
  };

  return (
    <>
      <Modal
        size="lg"
        show={showRegistro}
        onHide={handleCloseRegistro}
        backdrop="static"
        keyboard={false}
        className="panel"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title></Modal.Title> */}
          <div className="col text-center">
            <h2 href="!#" id="register-form-link">
              <strong>REGISTRATE AHORA</strong>
            </h2>
          </div>
        </Modal.Header>

        <Modal.Body className="m-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="row">
                <div className="col-lg-12">
                  <div className="text-center col-lg-12">
                    <img src={peluqueroImg} />
                    <h5>Datos del propietario</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group row">
              <img src={usuarioImg} className="col-sm-2 svg" />
              <div className="col-sm-4">
                <input
                  type="text"
                  className="input-sesion-registro"
                  placeholder="Nombre"
                  name="propietario_nombre"
                  onChange={handleChange}
                  value={formulario.propietario_nombre}
                />
              </div>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="input-sesion-registro"
                  placeholder="Apellidos"
                  name="propietario_apellidos"
                  onChange={handleChange}
                  value={formulario.propietario_apellidos}
                />
              </div>
            </div>

            <div className="form-group row">
              <img src={iphoneImg} alt="" className="col-sm-2 svg" />
              <div className="col-sm-6">
                <input
                  type="text"
                  className="input-sesion-registro"
                  placeholder="Celular"
                  name="propietario_celular"
                  onChange={handleChange}
                  value={formulario.propietario_celular}
                />
              </div>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="input-sesion-registro"
                  placeholder="Fijo"
                  name="propietario_fijo"
                  onChange={handleChange}
                  value={formulario.propietario_fijo}
                />
              </div>
            </div>

            <div className="form-group row">
              <img src={identificacionImg} className="col-sm-2 svg" />
              <div className="col-sm-3">
                <input
                  type="text"
                  className="input-sesion-registro"
                  placeholder="DNI"
                  name="propietario_dni"
                  onChange={handleChange}
                  value={formulario.propietario_dni}
                />
              </div>
              <label className="col-sm-4" for="">
                ¿Eres menor de edad?
              </label>
              <div className="col-sm-3">
                <div className="custom-control custom-radio custom-control-inline col-sm-1">
                  <input
                    type="radio"
                    id="customRadioInline1"
                    className="custom-control-input"
                    name="propietario_menor"
                  />
                  <label
                    className="custom-control-label"
                    for="customRadioInline1"
                  >
                    SI
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline col-sm-1">
                  <input
                    type="radio"
                    id="customRadioInline2"
                    className="custom-control-input"
                    name="propietario_menor"
                  />
                  <label
                    className="custom-control-label"
                    for="customRadioInline2"
                  >
                    NO
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group row">
              <img src={emailImg} className="col-sm-2 svg" />
              <div className="col-sm-4">
                <input
                  type="text"
                  className="input-sesion-registro"
                  placeholder="Email"
                  name="propietario_email"
                  onChange={handleChange}
                  value={formulario.propietario_email}
                />
              </div>
              <img src={passwordImg} className="col-sm-2 svg" />
              <div className="col-sm-4">
                <input
                  type="password"
                  id="passwordRegistro"
                  className="input-sesion-registro"
                  placeholder="Password"
                  name="propietario_password"
                  onChange={handleChange}
                  value={formulario.propietario_password}
                />
              </div>
            </div>

            <div className="form-group row">
              <img src={direccionImg} className="col-sm-2 svg" />
              <div className="col-sm-10">
                <input
                  type="text"
                  className="input-sesion-registro"
                  placeholder="Direccion"
                  onChange={handleChange}
                  name="propietario_direccion"
                  value={formulario.propietario_direccion}
                />
              </div>
            </div>

            <div className="form-group row">
              <img src={direccionImg} className="col-sm-2 svg" />
              <div className="col-sm-3">
                <select className="input-sesion-registro">
                  <option>-Distrito-</option>
                  <option>Lima</option>
                </select>
              </div>
              <div className="col-sm-3">
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

            <div className="form-group text-center">
              <button className="btn-principal" type="submit">
                INICIAR SESIÓN
              </button>
              <button
                type="button"
                className="btn-secundario"
                data-dismiss="modal"
                onClick={handleCloseRegistro}
              >
                CANCELAR
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalRegistro;
