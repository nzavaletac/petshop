import {URL_BACKEND} from "../../environments/environments";

export const getCitas = async () => {
  const peticion = await fetch(`${URL_BACKEND}/citas`);
  const data = peticion.json();
  return data;
};
