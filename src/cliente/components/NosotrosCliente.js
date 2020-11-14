import React from "react";
import nosotros3 from "./../../assets/img/nosotros3.png";
import nosotros1 from "./../../assets/img/nosotros1.png";
import nosotros2 from "./../../assets/img/nosotros2.png";

const NosotrosCliente = () => {
  return (
    <>
      <h4 className="titulos" id="nosotros">
        NOSOTROS
      </h4>
      <section className="row">
        <div className="col-lg-12 alturaCards">
          <div className="card">
            <div className="card text-center">
              <div className="card-body">
                <h3 className="card-title">CUIDAMOS A TUS MASCOTAS</h3>
                <p className="card-text">
                  El estilo de vida hoy en dia nos ha generado muy poca
                  disponibilidad de tiempo para el cuidado de nuestra mascotas,
                  por eso hemos creado PetShop & Care para que ya no te
                  preocupes por el seguimiento de las vacunas de tus mascotas,
                  nosotros lo hacemos por ti!
                </p>
              </div>
              <div className="card-text">
                <img src={nosotros3} className="nosotrosImg2 m-2" />
                <img src={nosotros1} className="nosotrosImg2 m-2" />
                <img src={nosotros2} className="nosotrosImg2 m-2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NosotrosCliente;
