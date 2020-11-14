import React, {useEffect, useState} from "react";
import HorarioTabla from "./HorarioTabla";
import {getHorarios} from "./services/mantenimientoService";

const Horario = () => {
  const [horarios, setHorarios] = useState([]);

  const traerHorarios = async () => {
    const data = await getHorarios();
    setHorarios(data);
  };

  useEffect(() => {
    traerHorarios();
  }, []);

  return (
    <>
      <HorarioTabla
        horarios={horarios}
        setHorarios={setHorarios}
        traerHorarios={traerHorarios}
      />
    </>
  );
};

export default Horario;
