import { generateUIDD } from "../commons/utils";

const clientes = [
  {
    idCliente: generateUIDD(),
    nombre: "Santiago Mosquera",
    dni: "1301231234",
    direccion: "Av. Amazonas y Naciones Unidad",
    telefono: "091234567",
    sincronizado: true,
  },
  {
    idCliente: generateUIDD(),
    nombre: "Sacarías Flores del Campo",
    dni: "09393938",
    direccion: "Av. Amazonas y Naciones Unidad",
    telefono: "091234567",
    sincronizado: true,
  },
  {
    idCliente: generateUIDD(),
    nombre: "Armando Casas",
    dni: "1301231234",
    direccion: "Av. Amazonas y Naciones Unidad",
    telefono: "091234567",
    sincronizado: false,
  },
  {
    idCliente: generateUIDD(),
    nombre: "Maria la del Barrio",
    dni: "1301231234",
    direccion: "Av. Amazonas y Naciones Unidad",
    telefono: "091234567",
    sincronizado: false,
  },
  {
    idCliente: generateUIDD(),
    nombre: "Cristhian Castro",
    dni: "1314719608",
    direccion: "Av. Amazonas y Naciones Unidad",
    telefono: "091234567",
    sincronizado: true,
  },
];
export default clientes;
