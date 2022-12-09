import clientes from "./listaClientesTest";

const getClients = () => {
  return clientes;
};
const deleteClient = () => {};
const registerClient = (client) => {
  clientes.push(client);
  return clientes;
};
const searchClients = (criteria, refreshFn) => {
  if (!criteria || criteria === "") {
    return clientes;
  }
  let results = [];
  criteria = criteria.toLowerCase();
  clientes.forEach((element) => {
    if (
      element?.nombre.toLowerCase().includes(criteria) ||
      element?.identificacion.includes(criteria)
    ) {
      results.push(element);
    }
  });
 // refreshFn(results);
  return results;
};

const getUnsincronizedClients = () => {
  let results = [];
  clientes.forEach((element) => {
    if (element?.sincronizado === false) {
      results.push(element);
    }
  });
  return results;
};
export const sincronizarCliente = (cliente) => {
  clientes.forEach((element) => {
    if (element?.identificacion === cliente.identificacion) {
      element.sincronizado = true;
    }
  });
  return true;
};

export {
  getClients,
  searchClients,
  getUnsincronizedClients,
  deleteClient,
  registerClient,
};
