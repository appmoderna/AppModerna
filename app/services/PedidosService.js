import clientes from "./listaClientesTest";

const pedidos = [
  { id: "A6200293", cliente: clientes[0], sincronized: true, stock: true },
  { id: "A5200223", cliente: clientes[1], sincronized: true, stock: false },
  { id: "A4202593", cliente: clientes[0], sincronized: false, stock: true },
  { id: "A3202293", cliente: clientes[3], sincronized: true, stock: true },
  { id: "A2201293", cliente: clientes[2], sincronized: true, stock: false },
  { id: "A1204293", cliente: clientes[0], sincronized: true, stock: true },
];
export const getPedidos = () => {
  return pedidos;
};
export const searchPedidos = async (criteria) => {
  if (!criteria || criteria === "") {
    return pedidos;
  }
  let results = [];
  criteria = criteria.toLowerCase();
  pedidos.forEach((element) => {
    if (
      element.cliente?.nombre?.toLowerCase().includes(criteria) ||
      element.cliente?.dni?.includes(criteria)
    ) {
      results.push(element);
    }
  });
  return results;
};
