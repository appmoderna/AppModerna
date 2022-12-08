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
    fecha: "02/02/1992",
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
    fecha: "02/02/1991",
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
  pedidos.push({
    producto,
    cantidad,
    precioUnitario: producto.precioVenta,
    subtotal: producto.precioVenta * cantidad,
  });
};
export const consultarPedidos = (criteria) => {
  if (!criteria || criteria === "") {
    return pedidos;
  }
  let results = [];
  criteria = criteria.toLowerCase();
  pedidos.forEach((element) => {
    let match = false;
    if (
      element?.idCliente?.nombre.toLowerCase().includes(criteria) ||
      // element?.producto?.descripcion.toLowerCase().includes(criteria) ||
      element?.idCliente?.identificacion.includes(criteria)
    ) {
      match = true;
    }
    element.detallePedido.forEach((detalle) => {
      if (detalle?.producto?.descripcion?.toLowerCase().includes(criteria)) {
        match = true;
      }
    });
    if (match) {
      results.push(element);
    }
  });
  return results;
};
