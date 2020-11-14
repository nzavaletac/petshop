import React from "react";
import pawImg from "./../../../assets/img/PAW.svg";

const PerfilPropietario = () => {
  return (
    <>
      <h4 className="titulos" id="nosotros">
        PROPIETARIO
      </h4>
      <section className="row">
        <div className="col-lg-8" alturaCards>
          <div className="card">
            <div className="card text-center">
              <div className="card-body">
                <form>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label etiqueta">
                      Nombres:
                    </label>
                    <label className="col-sm-9 col-form-label datos">
                      Monica
                    </label>
                    <label className="col-sm-3 col-form-label etiqueta">
                      Apellidos:
                    </label>
                    <label className="col-sm-9 col-form-label datos">
                      Ferrari Gabilondo
                    </label>
                    <label className="col-sm-3 col-form-label etiqueta">
                      DNI:
                    </label>
                    <label className="col-sm-9 col-form-label datos">
                      12345678
                    </label>
                    <label className="col-sm-3 col-form-label etiqueta">
                      Celular:
                    </label>
                    <label className="col-sm-9 col-form-label datos">
                      995317153
                    </label>
                    <label className="col-sm-3 col-form-label etiqueta">
                      Tel.Fijo:
                    </label>
                    <label className="col-sm-9 col-form-label datos">
                      014444444
                    </label>
                    <label className="col-sm-3 col-form-label etiqueta">
                      Direccion:
                    </label>
                    <label className="col-sm-9 col-form-label datos">
                      Av. Lima Nro. 653 - Lima - Peru
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <figure className="izquierda">
            <img src={pawImg} alt="" />
          </figure>
        </div>
      </section>
    </>
  );
};

export default PerfilPropietario;
