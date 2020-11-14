import React, {useState} from "react";
import goldeImg from "./../../../assets/img/golden1.png";
import gatoImg from "./../../../assets/img/gato 1.png";
import ModalRegistroMascota from "./ModalRegistroMascota";

const PerfilMascotas = () => {
  const [showRegistroMascota, setShowRegistroMascota] = useState(false);
  const handleCloseRegistroMascota = () => setShowRegistroMascota(false);
  const handleShowRegistroMascota = () => setShowRegistroMascota(true);
  return (
    <>
      <ModalRegistroMascota
        showRegistroMascota={showRegistroMascota}
        handleCloseRegistroMascota={handleCloseRegistroMascota}
        handleShowRegistroMascota={handleShowRegistroMascota}
      />
      {/* <!-- BOTON AGREGAR MASCOTA --> */}
      <div className="agregarmascota">
        <button
          type="button"
          className="btn-mascota"
          id="btnModalMascota"
          onClick={handleShowRegistroMascota}
        >
          AGREGAR MASCOTA
        </button>
      </div>

      {/* <!-- CARD MASCOTAS --> */}
      <h4 className="titulos mt-4" id="servicios">
        MASCOTAS
      </h4>
      <section className="row">
        {/* <!-- MASCOTA 1 --> */}
        <div className="col-lg-6" alturaCards>
          <div className="card">
            <div className="card text-center">
              <div className="card-body">
                <div className="fotomascota">
                  <img src={goldeImg} />
                </div>
                <h3 className="card-title">JACK</h3>
                <p className="card-text">GOLDEN RETRIEVER</p>
                <p className="card-text">6 Años</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6" alturaCards>
          <div className="card">
            <div className="card text-center">
              <div className="card-body">
                <div className="fotomascota">
                  <img src={gatoImg} />
                </div>
                <h3 className="card-title">FORTUNATO</h3>
                <p className="card-text">MESTIZO</p>
                <p className="card-text">8 Años</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PerfilMascotas;
