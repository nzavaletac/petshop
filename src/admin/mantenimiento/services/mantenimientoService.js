import {URL_BACKEND} from "../../environments/environments";

export const getRazas = async () => {
  const peticion = await fetch(`${URL_BACKEND}/raza`);
  const data = peticion.json();
  return data;
};

export const postRazaForm = async (objRaza) => {
  const peticion = await fetch(`${URL_BACKEND}/raza`, {
    method: "POST",
    body: JSON.stringify(objRaza),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await peticion.json();
};

export const deleteRazasXId = async (id) => {
  const peticion = await fetch(`${URL_BACKEND}/raza/${id}`, {
    method: "DELETE",
  });
  const json = await peticion.json();
  return json;
};

export const getTipos = async () => {
  const peticion = await fetch(`${URL_BACKEND}/tipo`);
  const data = peticion.json();
  return data;
};

export const postTipoForm = async (objTipo) => {
  const peticion = await fetch(`${URL_BACKEND}/tipo`, {
    method: "POST",
    body: JSON.stringify(objTipo),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await peticion.json();
};

export const deleteTiposXId = async (id) => {
  const peticion = await fetch(`${URL_BACKEND}/tipo/${id}`, {
    method: "DELETE",
  });
  const json = await peticion.json();
  return json;
};

export const getVacunas = async () => {
  const peticion = await fetch(`${URL_BACKEND}/vacunas`);
  const data = peticion.json();
  return data;
};

export const postVacunasForm = async (objVacunas) => {
  const peticion = await fetch(`${URL_BACKEND}/vacunas`, {
    method: "POST",
    body: JSON.stringify(objVacunas),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await peticion.json();
};

export const deleteVacunasXId = async (id) => {
  const peticion = await fetch(`${URL_BACKEND}/vacunas/${id}`, {
    method: "DELETE",
  });
  const json = await peticion.json();
  return json;
};

export const getHorarios = async () => {
  const peticion = await fetch(`${URL_BACKEND}/horario`);
  const data = peticion.json();
  return data;
};

export const postHorarioForm = async (objHorario) => {
  const peticion = await fetch(`${URL_BACKEND}/horario`, {
    method: "POST",
    body: JSON.stringify(objHorario),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await peticion.json();
};

export const deleteHorariosXId = async (id) => {
  const peticion = await fetch(`${URL_BACKEND}/horario/${id}`, {
    method: "DELETE",
  });
  const json = await peticion.json();
  return json;
};

export const getDistritos = async () => {
  const peticion = await fetch(`${URL_BACKEND}/distrito`);
  const data = peticion.json();
  return data;
};

export const getVeterinarios = async () => {
  const peticion = await fetch(`${URL_BACKEND}/veterinario`);
  const data = peticion.json();
  return data;
};
export const postVeterinarioForm = async (objVeterinario) => {
  const peticion = await fetch(`${URL_BACKEND}/veterinario`, {
    method: "POST",
    body: JSON.stringify(objVeterinario),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await peticion.json();
};

export const deleteVeterinarioXId = async (id) => {
  const peticion = await fetch(`${URL_BACKEND}/veterinario/${id}`, {
    method: "DELETE",
  });
  const json = await peticion.json();
  return json;
};
