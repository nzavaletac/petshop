import React, {useEffect, useState} from "react";
import {getVeterinarios} from "./services/mantenimientoService";
import VeterinarioTabla from "./VeterinarioTabla";

const Veterinario = () => {
  const [veterinarios, setVeterinarios] = useState([]);

  const traerVeterinarios = async () => {
    const data = await getVeterinarios();
    setVeterinarios(data);
  };
  useEffect(() => {
    traerVeterinarios();
  }, []);

  return (
    <>
      <VeterinarioTabla
        veterinarios={veterinarios}
        setVeterinarios={setVeterinarios}
        traerVeterinarios={traerVeterinarios}
      />
    </>
  );
};

export default Veterinario;
