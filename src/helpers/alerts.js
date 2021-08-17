import Swal from "sweetalert2";

const successAlert = () => {
  Swal.fire(
    "Cliente cargado",
    "Los datos se guardaron exitosamente!",
    "success"
  );
};

const errorAlert = (text) => {
  Swal.fire({
    icon: "error",
    title: "Ocurrió un error",
    text: text,
    footer: "Puede intentar nuevamente más tarde",
  });
};

const successfulDelete = () => {
  Swal.fire(
    "¡Cliente eliminado!",
    "El cliente fue borrado de la lista de clientes.",
    "success"
  );
};

const successfulPaymentAlert = () => {
  Swal.fire(
    "Pago realizado",
    "¡El pago se efectuó exitosamente!",
    "success"
  );
};

const successfulPurchaseAlert = () => {
  Swal.fire(
    "¡Compra efectuada!",
    "¡La compra se agregó exitosamente!",
    "success"
  );
};

export { successAlert, errorAlert, successfulDelete, successfulPaymentAlert, successfulPurchaseAlert };
