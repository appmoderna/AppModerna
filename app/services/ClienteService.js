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
      element.nombre.toLowerCase().includes(criteria) ||
      element.apellido.includes(criteria) ||
      element.dni.includes(criteria)
    ) {
      results.push(element);
    }
  });
  return results;
};

export { getClients, searchClients, deleteClient, registerClient };
