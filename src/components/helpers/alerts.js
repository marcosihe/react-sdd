import Swal from "sweetalert2"

const successAlert = () => {
    Swal.fire(
        "Cliente cargado",
        "Los datos se guardaron exitosamente!",
        "success"
      );
}

const errorAlert = () => {
    Swal.fire({
        icon: "error",
        title: ":(",
        text: "Los datos no se cargaron!",
        footer: "Intente nuevamente.",
      });
}

export { successAlert, errorAlert }