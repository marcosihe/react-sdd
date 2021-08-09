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
        title: "Ocurrió un error",
        text: "¡Los datos no se cargaron!",
        footer: "Puede intentar nuevamente más tarde",
      });
}

export { successAlert, errorAlert }