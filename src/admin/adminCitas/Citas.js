import React from "react";
import {useEffect} from "react";
import {useState} from "react";
import CitasTabla from "./CitasTabla";
import {getCitas} from "./services/citaService";

const Citas = () => {
  const [citas, setCitas] = useState([]);
  const traerCitas = async () => {
    const data = await getCitas();
    setCitas(data);
  };
  useEffect(() => {
    traerCitas();
  }, []);

  return (
    <CitasTabla citas={citas} setCitas={setCitas} traerCitas={traerCitas} />
  );
};

export default Citas;
