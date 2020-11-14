import React, {useEffect, useState} from "react";
import {getTipos} from "./services/mantenimientoService";
import TipoTabla from "./TipoTabla";

const Tipo = () => {
  const [tipos, setTipos] = useState([]);

  const traerTipos = async () => {
    const data = await getTipos();
    setTipos(data);
  };

  useEffect(() => {
    traerTipos();
  }, []);

  return (
    <>
      <TipoTabla tipos={tipos} setTipos={setTipos} traerTipos={traerTipos} />
    </>
  );
};

export default Tipo;
