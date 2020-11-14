import React, {useState} from "react";
import vacunaImg from "./../../assets/img/vacuna.svg";
import grommingImg from "./../../assets/img/grooming.svg";
import ModalCita from "./ModalCita";
import ModalGromming from "./ModalGromming";
import PerfilHeader from "./perfilComponents/PerfilHeader";

const ServiciosCliente = () => {
  const [showCitas, setShowCitas] = useState(false);

  const handleCloseCitas = () => setShowCitas(false);
  const handleShowCitas = () => setShowCitas(true);

  const [showGromming, setShowGromming] = useState(false);

  const handleCloseGromming = () => setShowGromming(false);
  const handleShowGromming = () => setShowGromming(true);

  return (
    <>
      <ModalGromming
        showGromming={showGromming}
        handleCloseGromming={handleCloseGromming}
        handleShowGromming={handleShowGromming}
      />
      <ModalCita
        showCitas={showCitas}
        handleCloseCitas={handleCloseCitas}
        handleShowCitas={handleShowCitas}
      />

      <h4 className="titulos mt-4" id="servicios">
        SERVICIOS A DOMICILIO
      </h4>
      <section className="row">
        <div className="col-lg-6 alturaCards">
          <div className="card">
            <div className="card text-center">
              <div className="card-body">
                <h3 className="card-title">APLICACION DE VACUNAS</h3>
                <p className="card-text">
                  <small className="text-muted">
                    CUMPLIENDO TODOS LOS PROTOCOLOS DE BIOSEGURIDAD
                  </small>
                </p>
                <img src={vacunaImg} alt="" />
                <button
                  type="button"
                  className="btn-principal"
                  id="btnModalVacuna"
                  onClick={handleShowCitas}
                >
                  RESERVAR CITA
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 alturaCards">
          <div className="card">
            <div className="card text-center">
              <div className="card-body">
                <h3 className="card-title">GROOMING</h3>
                <p className="card-text">
                  <small className="text-muted">
                    BAÑO Y ESTÉTICA MÓVIL PARA TUS MASCOTAS
                  </small>
                </p>
                <img src={grommingImg} />
                <button
                  type="button"
                  className="btn-principal"
                  id=""
                  onClick={handleShowGromming}
                >
                  RESERVAR CITA
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiciosCliente;
