import { errorAlert, successfulDelete } from "./alerts";
import Swal from "sweetalert2";

const responseStatus = 200;

const apiRequest = async (setState, URL) => {
  try {
    const response = await fetch(URL);
    console.log(response);
    if (response.status === responseStatus) {
      setState(await response.json());
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteRequest = (id, setState, URL, setDeleted) => {
  Swal.fire({
    title: "¿Desea borrar este cliente?",
    text: "Los clientes eliminados no se pueden recuperar.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, borrar cliente!",
    cancelButtonText: "Cancelar",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const response = await fetch(`${URL}/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === responseStatus) {
          setDeleted(true);
          successfulDelete();
          apiRequest(setState, URL);
        }else{
          errorAlert("Cliente no encontrado.");
        }
      } catch (error) {
        console.log(error);
        errorAlert("¡No se pudo eliminar cliente!");
      }
    }
  });
};

export { apiRequest, deleteRequest };
