import { generateUIDD } from "../commons/utils";
import { getClients } from "./ClienteService";
import { consultarProductos, getProductoById } from "./ProductoService";

const VALOR_IVA = 12;
const productos = consultarProductos();
const clientes = getClients();

const carrito = [
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
    producto: productos[2],
    cantidad: 1290,
    precioUnitario: productos[1].precioVenta,
    subtotal: productos[1].precioVenta * 1290,
    iva: (productos[1].precioVenta * 1290 * VALOR_IVA) / 100,
  },
];
const detalleCarrito = {
  producto: "",
  cantidad: "",
  precioUnitario: "",
  subtotal: "",
};

export const addDetallePedido = (producto, cantidad) => {
  let exist = false;
  carrito.forEach((item) => {
    if (item.producto.idSap === producto.idSap) {
      item.cantidad += parseInt(cantidad);
      item.subtotal = item.cantidad * producto.precioVenta;
      exist = true;
      return;
    }
  });
  if (exist) {
    return;
  }
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
  return carrito.splice(id);
};
