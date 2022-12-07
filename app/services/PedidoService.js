import { generateUIDD } from "../commons/utils";
import { getClients } from "./ClienteService";
import { consultarProductos, getProductoById } from "./ProductoService";

const VALOR_IVA = 12;
const test = getProductoById(1);
const test2 = getProductoById(2);
const clientes = getClients();
console.log(test);
const pedidos = [
  {
    idPedido: generateUIDD(),
    idCliente: clientes[1],
    idVendedor: "Santiago Mosquera",
    textoFactura: "",
    detallePedido: [
      {
        producto: test,
        cantidad: 20,
        precioUnitario: test.precioVenta,
        subtotal: test.precioVenta * 20,
        iva: (test.precioVenta * 20 * VALOR_IVA) / 100,
      },
      {
        idPedido: generateUIDD(),
        idCliente: clientes[1],
        idVendedor: "Santiago Mosquera",
        producto: test2,
        cantidad: 10,
        precioUnitario: test2.precioVenta,
        subtotal: test2.precioVenta * 10,
        iva: (test2.precioVenta * 20 * VALOR_IVA) / 100,
      },
      {
        idPedido: generateUIDD(),
        idCliente: clientes[1],
        idVendedor: "Santiago Mosquera",
        producto: test2,
        cantidad: 10,
        precioUnitario: test2.precioVenta,
        subtotal: test2.precioVenta * 10,
        iva: (test2.precioVenta * 20 * VALOR_IVA) / 100,
      },
    ],
  },
  {
    idPedido: generateUIDD(),
    idCliente: clientes[0],
    idVendedor: "Santiago Mosquera",
    textoFactura: "Pedido sin stock",

    detallePedido: [
      {
        producto: test,
        cantidad: 20,
        precioUnitario: test.precioVenta,
        subtotal: test.precioVenta * 20,
        iva: (test.precioVenta * 20 * VALOR_IVA) / 100,
      },
      {
        idPedido: generateUIDD(),
        idCliente: clientes[1],
        idVendedor: "Santiago Mosquera",
        producto: test2,
        cantidad: 10,
        precioUnitario: test2.precioVenta,
        subtotal: test2.precioVenta * 10,
        iva: (test2.precioVenta * 20 * VALOR_IVA) / 100,
      },
      {
        idPedido: generateUIDD(),
        idCliente: clientes[1],
        idVendedor: "Santiago Mosquera",
        producto: test2,
        cantidad: 10,
        precioUnitario: test2.precioVenta,
        subtotal: test2.precioVenta * 10,
        iva: (test2.precioVenta * 20 * VALOR_IVA) / 100,
      },
    ],
  },
];
const detallePedido = {
  producto: "",
  cantidad: "",
  precioUnitario: "",
  subtotal: "",
};

export const addDetallePedido = (producto, cantidad) => {
  pedido.push({
    producto,
    cantidad,
    precioUnitario: producto.precioVenta,
    subtotal: producto.precioVenta * cantidad,
  });
};
export const consultarPedido = (criteria) => {
  if (!criteria || criteria === "") {
    return clientes;
  }
  let results = [];
  criteria = criteria.toLowerCase();
  const cliente = pedidos.forEach((element) => {
    if (
      element.idCliente.toLowerCase().includes(criteria) ||
      element.apellido.includes(criteria) ||
      element.dni.includes(criteria)
    ) {
      results.push(element);
    }
  });
  return results;
};
