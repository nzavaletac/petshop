import React from "react";

const TiendaCliente = () => {
  return (
    <>
      <h4 className="titulos mt-2" id="tienda">
        TIENDA VIRTUAL
      </h4>
      <div className="card text-center">
        <div className="row  col-lg-12">
          <div className="col-lg-3">
            <div className="carousel-cell">
              <img
                src="https://www.dhresource.com/0x0/f2/albu/g7/M00/6C/F8/rBVaSlrVtH-AVdIaAAHdSqF52vU369.jpg"
                alt=""
              />
              <span>Spoik</span>
              <span>S/25.00</span>
              <button>AGREGAR</button>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="carousel-cell">
              <img
                src="https://ae01.alicdn.com/kf/Hbc385b856a30475d91465345eec5a06bs/Pelota-de-juguete-para-mascotas-juguete-para-perro-gato-Acci-n-Com-n-distribuci-n-de.jpg"
                alt=""
              />
              <span>Pelota de Goma</span>
              <span>S/35.00</span>
              <button>AGREGAR</button>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="carousel-cell">
              <img
                src="https://ae01.alicdn.com/kf/H0ae7779313314fa891f87265bdff5f12Y/Producto-para-mascotas-de-juguete-de-goma-para-perros-con-anillo-de-goma-de-hueso-dientes.jpg"
                alt=""
              />
              <span>Juguete de Goma</span>
              <span>S/ 15.00</span>
              <button>AGREGAR</button>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="carousel-cell">
              <img
                src="https://decodesign.com.ar/18656-large_default/juguete-para-gato.jpg"
                alt=""
              />
              <span>Cool Furniture</span>
              <span>S/ 50.00</span>
              <button>AGREGAR</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TiendaCliente;
