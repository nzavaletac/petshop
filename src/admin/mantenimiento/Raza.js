import React, {useEffect, useState} from "react";
import RazaTabla from "./RazaTabla";
import {getRazas} from "./services/mantenimientoService";

const Raza = () => {
  const [razas, setRazas] = useState([]);

  const traerRazas = async () => {
    const data = await getRazas();
    setRazas(data);
  };

  useEffect(() => {
    traerRazas();
  }, []);

  return (
    <>
      <RazaTabla razas={razas} setRazas={setRazas} traerRazas={traerRazas} />
    </>
  );
};

export default Raza;
