import React from "react";
import {MDBDataTable} from "mdbreact";
import clientesImg from "./../../assets/img/clientes.svg";
import borrar from "./../../assets/img/borrar.svg";
import mas from "./../../assets/img/mas.svg";
import Swal from "sweetalert2";
import {deleteClienteXId} from "./services/clienteService";

const ClientesTabla = ({clientes, setClientes, traerClientes}) => {
  const eliminarClienteXId = (id) => {
    Swal.fire({
      title: "¿Eliminar?",
      icon: "error",
      text: "¿Estás seguro de eliminar?",
      showCancelButton: true,
    }).then(({isConfirmed}) => {
      if (isConfirmed) {
        deleteClienteXId(id).then((data) => {
          if (data.propietario_id) {
            setClientes([]);
            traerClientes();
            Swal.fire({
              title: "Eliminado",
              text: "Cliente eliminado correctamente",
              timer: 1500,
              icon: "success",
            });
          }
        });
      }
    });
  };

  const data = {
    columns: [
      {label: "ID", field: "propietario_id"},
      {label: "Nombres", field: "propietario_nombre"},
      {label: "Apellidos", field: "propietario_apellidos"},
      {label: "Celular", field: "propietario_celular"},
      {label: "Fijo", field: "propietario_fijo"},
      {label: "DNI", field: "propietario_dni"},
      //   {label: "Menor Edad", field: "propietario_menor"},
      {label: "Email", field: "propietario_email"},
      {label: "Direccion", field: "propietario_direccion"},
      {label: "Distrito", field: "propietario_distrito"},
      {label: "Mascota", field: "propietario_provincia"},
      //   {label: "Departamento", field: "propietario_departamento"},
      {label: "Acciones", field: "acciones"},
    ],
    rows: clientes.map((c) => {
      return {
        ...c,
        acciones: (
          <>
            <button
              className="btn-acciones"
              onClick={() => {
                eliminarClienteXId(c.propietario_id);
              }}
            >
              <img src={borrar} className="svg1" />
            </button>
            <button className="btn-acciones">
              <img src={mas} className="svg1" />
            </button>
          </>
        ),
      };
    }),
  };
  return (
    <section className="main__container row">
      <img src={clientesImg} className="svg m-1" />
      <h1 className="svg m-1">Clientes</h1>
      <div className="col-12">
        <div className="shadow">
          <div className="card-body">
            <MDBDataTable
              className="text-center"
              striped
              bordered
              hover
              responsive
              data={data}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientesTabla;
