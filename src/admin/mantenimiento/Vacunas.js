import React, {useEffect, useState} from "react";
import {getVacunas} from "./services/mantenimientoService";
import VacunasTabla from "./VacunasTabla";

const Vacunas = () => {
  const [vacunas, setVacunas] = useState([]);

  const traerVacunas = async () => {
    const data = await getVacunas();
    setVacunas(data);
  };
  useEffect(() => {
    traerVacunas();
  }, []);

  return (
    <>
      <VacunasTabla
        vacunas={vacunas}
        setVacunas={setVacunas}
        traerVacunas={traerVacunas}
      />
    </>
  );
};

export default Vacunas;
