import {URL_BACKEND} from "../../admin/environments/environments";

export const postPropietarioForm = async (objPropietario) => {
  const peticion = await fetch(`${URL_BACKEND}/propietario`, {
    method: "POST",
    body: JSON.stringify(objPropietario),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await peticion.json();
};
