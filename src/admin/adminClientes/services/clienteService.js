import {URL_BACKEND} from "../../environments/environments";

export const getPropietario = async () => {
  const peticion = await fetch(`${URL_BACKEND}/propietario`);
  const data = peticion.json();
  return data;
};

export const deleteClienteXId = async (id) => {
  const peticion = await fetch(`${URL_BACKEND}/propietario/${id}`, {
    method: "DELETE",
  });
  const json = await peticion.json();
  return json;
};
