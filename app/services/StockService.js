import { consultarProductos } from "./ProductoService";

const productos = consultarProductos();
const stocks = [
  {
    idVendedor: 1,
    idProducto: productos[1].idSap,
    cantidad: 20,
    precioUnitario: 10,
    subTotal: 20 * 10,
  },
  {
    idVendedor: 1,
    idProducto: productos[2].idSap,
    cantidad: 30,
    precioUnitario: 10,
    subTotal: 30 * 10,
  },
];

const getStockById = (id) => {
  let stock;
  stocks.forEach((element) => {
    if (element.idProducto === id) {
      stock = element;
    }
  });
  return stock;
};
