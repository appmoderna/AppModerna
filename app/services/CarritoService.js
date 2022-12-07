import { generateUIDD } from "../commons/utils";
import { getClients } from "./ClienteService";
import { consultarProductos, getProductoById } from "./ProductoService";

const VALOR_IVA = 12;
const test = getProductoById(1);
const test2 = getProductoById(2);
const clientes = getClients();

const carrito = [
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
];
const detalleCarrito = {
  producto: "",
  cantidad: "",
  precioUnitario: "",
  subtotal: "",
};

export const addDetallePedido = (producto, cantidad) => {
  carrito.push({
    producto,
    cantidad,
    precioUnitario: producto.precioVenta,
    subtotal: producto.precioVenta * cantidad,
  });
};

export const getPedidoActual = () => {
  return carrito;
};

export const calcularFacturaPedido = (pedido) => {
  let iva = 0;
  let subtotal = 0;
  pedido.forEach((detallePedido) => {
    if (detallePedido.producto.iva) {
      iva +=
        ((detallePedido.producto.precioVenta * VALOR_IVA) / 100) *
        detallePedido.cantidad;
    }
    subtotal += detallePedido.producto.precioVenta * detallePedido.cantidad;
  });
  return { iva, subtotal };
};
export const removeDetalle = (id) => {
  return pedido.splice(id);
};
