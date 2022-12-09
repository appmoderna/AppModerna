import { generateUIDD } from "../commons/utils";

const clientes = [
  {
    idCliente: generateUIDD(),
    nombre: "Santiago Mosquera",
    identificacion: "1371231234",
    direccion: "Av. Amazonas y Naciones Unidad",
    telefono: "091234567",
    sincronizado: true,
  },
  {
    idCliente: generateUIDD(),
    nombre: "Sacarías Flores del Campo",
    identificacion: "09393938",
    direccion: "Av. Amazonas y Naciones Unidad",
    telefono: "091234567",
    sincronizado: true,
  },
  {
    idCliente: generateUIDD(),
    nombre: "Armando Casas",
    identificacion: "1331231234",
    direccion: "Av. Amazonas y Naciones Unidad",
    telefono: "091234567",
    sincronizado: false,
  },
  {
    idCliente: generateUIDD(),
    nombre: "Maria la del Barrio",
    identificacion: "1345231234",
    direccion: "Av. Amazonas y Naciones Unidad",
    telefono: "091234567",
    sincronizado: false,
  },
  {
    idCliente: generateUIDD(),
    nombre: "Cristhian Castro",
    identificacion: "1314719608",
    direccion: "Av. Amazonas y Naciones Unidad",
    telefono: "091234567",
    sincronizado: false,
  },
];
export default clientes;
