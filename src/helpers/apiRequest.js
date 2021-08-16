import { errorAlert, successfulDelete } from "./alerts";
import Swal from "sweetalert2";

const responseStatus = 200;

// GET
const apiRequest = async (setState, URL) => {
  try {
    const response = await fetch(URL);
    if (response.status === responseStatus) {
      setState(await response.json());
    }
  } catch (error) {
    console.log(error);
  }
};

// DELETE
const deleteObject = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
};

const swalFireDeleteObject = {
  title: "¿Desea borrar este cliente?",
  text: "Los clientes eliminados no se pueden recuperar.",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Sí, borrar cliente!",
  cancelButtonText: "Cancelar",
};

const deleteRequest = (id, setState, URL, setDeleted) => {
  Swal.fire(swalFireDeleteObject).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const response = await fetch(`${URL}/${id}`, deleteObject);
        if (response.status === responseStatus) {
          setDeleted(true);
          successfulDelete();
          apiRequest(setState, URL);
        } else {
          errorAlert("Cliente no encontrado.");
        }
      } catch (error) {
        console.log(error);
        errorAlert("¡No se pudo eliminar cliente!");
      }
    }
  });
};

// POST
const postMethod = (objectToSend) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objectToSend),
  };
};

// PUT
const putMethod = (objectToSend) => {
  return {
    method: "PUT",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(objectToSend)
  }
}

export { apiRequest, deleteRequest, postMethod, putMethod };
