import clientes from "./listaClientesTest";

const getClients = () => {
  return clientes;
};
const deleteClient = () => {};
const registerClient = (client) => {
  clientes.push(client);
  return clientes;
};
const searchClients = (criteria) => {
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
export {
  getClients,
  searchClients,
  getUnsincronizedClients,
  deleteClient,
  registerClient,
};
