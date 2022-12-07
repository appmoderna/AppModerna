import { generateUIDD } from "../commons/utils";
import { getClients } from "./ClienteService";
import { consultarProductos, getProductoById } from "./ProductoService";

const VALOR_IVA = 12;
const productos = consultarProductos();
const clientes = getClients();
console.log(productos[0]);
const pedidos = [
  {
    idPedido: generateUIDD(),
    idCliente: clientes[1],
    idVendedor: "Santiago Mosquera",
    textoFactura: "",
    detallePedido: [
      {
        producto: productos[0],
        cantidad: 20,
        precioUnitario: productos[0].precioVenta,
        subtotal: productos[0].precioVenta * 20,
        iva: (productos[0].precioVenta * 20 * VALOR_IVA) / 100,
      },
      {
        idPedido: generateUIDD(),
        idCliente: clientes[1],
        idVendedor: "Santiago Mosquera",
        producto: productos[1],
        cantidad: 10,
        precioUnitario: productos[1].precioVenta,
        subtotal: productos[1].precioVenta * 10,
        iva: (productos[1].precioVenta * 20 * VALOR_IVA) / 100,
      },
      {
        idPedido: generateUIDD(),
        idCliente: clientes[1],
        idVendedor: "Santiago Mosquera",
        producto: productos[1],
        cantidad: 10,
        precioUnitario: productos[1].precioVenta,
        subtotal: productos[1].precioVenta * 10,
        iva: (productos[1].precioVenta * 20 * VALOR_IVA) / 100,
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
        producto: productos[0],
        cantidad: 20,
        precioUnitario: productos[0].precioVenta,
        subtotal: productos[0].precioVenta * 20,
        iva: (productos[0].precioVenta * 20 * VALOR_IVA) / 100,
      },
      {
        idPedido: generateUIDD(),
        idCliente: clientes[1],
        idVendedor: "Santiago Mosquera",
        producto: productos[1],
        cantidad: 10,
        precioUnitario: productos[1].precioVenta,
        subtotal: productos[1].precioVenta * 10,
        iva: (productos[1].precioVenta * 20 * VALOR_IVA) / 100,
      },
      {
        idPedido: generateUIDD(),
        idCliente: clientes[1],
        idVendedor: "Santiago Mosquera",
        producto: productos[1],
        cantidad: 10,
        precioUnitario: productos[1].precioVenta,
        subtotal: productos[1].precioVenta * 10,
        iva: (productos[1].precioVenta * 20 * VALOR_IVA) / 100,
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
