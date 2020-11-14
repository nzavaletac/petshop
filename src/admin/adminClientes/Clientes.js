import React, {useEffect, useState} from "react";
import ClientesTabla from "./ClientesTabla";
import {getPropietario} from "./services/clienteService";

const Clientes = () => {
  const [clientes, setClientes] = useState([]);

  const traerClientes = async () => {
    const data = await getPropietario();
    setClientes(data);
  };

  useEffect(() => {
    traerClientes();
  }, []);

  return (
    <>
      <ClientesTabla
        clientes={clientes}
        setClientes={setClientes}
        traerClientes={traerClientes}
      />
    </>
  );
};

export default Clientes;
