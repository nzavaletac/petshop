import React, {useState} from "react";
import BlogModal from "./BlogModal";

const Blog1 = () => {
  const [showBlog1, setShowBlog1] = useState(false);
  const handleCloseBlog1 = () => setShowBlog1(false);
  const handleShowBlog1 = () => setShowBlog1(true);
  const [showBlog2, setShowBlog2] = useState(false);
  const handleCloseBlog2 = () => setShowBlog2(false);
  const handleShowBlog2 = () => setShowBlog2(true);

  return (
    <>
      <BlogModal
        showBlog1={showBlog1}
        handleCloseBlog1={handleCloseBlog1}
        handleShowBlog1={handleShowBlog1}
        showBlog2={showBlog2}
        handleCloseBlog2={handleCloseBlog2}
        handleShowBlog2={handleShowBlog2}
      />
      <div id="parallax-image">
        <div className="row h-100">
          <div className="col-md-12 align-self-center">
            <h2 className="text-center" id="one"></h2>
          </div>
        </div>
      </div>
      <h4 className="card-title">
        <strong>CONVULSIONES EN PERROS: CAUSAS Y RECOMENDACIONES</strong>
      </h4>
      <p className="card-text">
        A lo largo de la vida de nuestra mascota, es normal que determinadas
        enfermedades vayan apareciendo en su organismo. Dependiendo de la raza,
        la frecuencia de éstas será mayor o menor. No obstante, hay patologías
        que no las esperamos porque son poco comunes. Las convulsiones en perros
        pueden entrar perfectamente en este grupo.
      </p>
      <button
        data-toggle="modal"
        data-target="#exampleModal"
        type="button"
        className="btn btn-principal"
        onClick={handleShowBlog1}
      >
        Leer mas ...
      </button>

      <div id="parallax-image1">
        <div className="row h-100">
          <div className="col-md-12 align-self-center">
            <h2 className="text-center" id="two"></h2>
          </div>
        </div>
      </div>
      <h4 className="card-title">
        <strong>EL MOQUILLO EN PERROS: SÍNTOMAS, TRATAMIENTO Y CONTAGIO</strong>
      </h4>
      <br />
      <p className="card-text">
        El moquillo en perros, o también llamado distemper, es una enfermedad
        altamente contagiosa que afecta principalmente a los perros cuando son
        cachorros, aunque también pueden verse afectados animales como los
        zorros o los hurones. Los gatos están a salvo ya que no les afecta este
        tipo de virus en concreto. Ellos pueden padecer otro tipo de virus, el
        moquillo felino, que nada tiene que ver con el canino.
      </p>
      <button
        data-toggle="modal"
        data-target="#exampleModal1"
        type="button"
        className="btn-principal"
        onClick={handleShowBlog2}
      >
        Leer mas ...
      </button>
    </>
  );
};

export default Blog1;
