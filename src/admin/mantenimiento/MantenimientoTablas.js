import React, {useEffect, useState} from "react";
import HorarioTabla from "./HorarioTabla";
import RazaTabla from "./RazaTabla";
import {
  getHorarios,
  getRazas,
  getTipos,
  getVacunas,
  getVeterinarios,
} from "./services/mantenimientoService";
import TipoTabla from "./TipoTabla";
import VacunasTabla from "./VacunasTabla";
import VeterinarioForm from "./VeterinarioForm";
import VeterinarioTabla from "./VeterinarioTabla";

const MantenimientoTablas = () => {
  // Razas
  const [razas, setRazas] = useState([]);
  const traerRazas = async () => {
    const data = await getRazas();
    setRazas(data);
  };
  useEffect(() => {
    traerRazas();
  }, []);
  // Tipos
  const [tipos, setTipos] = useState([]);
  const traerTipos = async () => {
    const data = await getTipos();
    setTipos(data);
  };
  useEffect(() => {
    traerTipos();
  }, []);
  // Vacunas
  const [vacunas, setVacunas] = useState([]);
  const traerVacunas = async () => {
    const data = await getVacunas();
    setVacunas(data);
  };
  useEffect(() => {
    traerVacunas();
  }, []);
  // Horarios
  const [horarios, setHorarios] = useState([]);
  const traerHorarios = async () => {
    const data = await getHorarios();
    setHorarios(data);
  };
  useEffect(() => {
    traerHorarios();
  }, []);
  // Veterinarios
  const [veterinarios, setVeterinarios] = useState([]);
  const traerVeterinarios = async () => {
    const data = await getVeterinarios();
    setVeterinarios(data);
  };
  useEffect(() => {
    traerVeterinarios();
  }, []);
  return (
    <section className="main__container row">
      <RazaTabla razas={razas} setRazas={setRazas} traerRazas={traerRazas} />
      <TipoTabla tipos={tipos} setTipos={setTipos} traerTipos={traerTipos} />
      <VacunasTabla
        vacunas={vacunas}
        setVacunas={setVacunas}
        traerVacunas={traerVacunas}
      />
      <HorarioTabla
        horarios={horarios}
        setHorarios={setHorarios}
        traerHorarios={setHorarios}
      />
      <VeterinarioTabla
        veterinarios={veterinarios}
        setVeterinarios={setVeterinarios}
        traerVeterinarios={traerVeterinarios}
      />
      <VeterinarioForm />
    </section>
  );
};

export default MantenimientoTablas;
