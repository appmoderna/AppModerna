import { generateUIDD } from "../commons/utils";

const productos = [
  {
    idSap: generateUIDD(),
    descripcion: "Harina",
    precioVenta: 20,
    iva: true,
    imagen:
      "https://modernaalimentos.com.ec/wp-content/uploads/2022/01/moderna-alimentos-harina-key-plus.jpg",
  },
  {
    idSap: generateUIDD(),
    descripcion: "Pan",
    precioVenta: 10,
    iva: false,
    imagen:
      "https://modernaalimentos.com.ec/wp-content/uploads/2022/01/moderna-alimentos-harina-key-plus.jpg",
  },
  {
    idSap: generateUIDD(),
    descripcion: "Fideos",
    precioVenta: 30,
    iva: true,
    imagen:
      "https://modernaalimentos.com.ec/wp-content/uploads/2022/01/moderna-alimentos-harina-key-plus.jpg",
  },
];

export const consultarProductos = (busqueda) => {
  if (!busqueda) {
    return productos;
  }
  let resultado = [];
  productos.forEach((elemento) => {
    if (
      elemento.descripcion
        .toLocaleLowerCase()
        .search(busqueda.toLocaleLowerCase()) === true
    ) {
      resultado.push(elemento);
    }
  });
  return resultado;
};
export const getProductoById = (id) => {
  let resultado;
  productos.forEach((elemento) => {
    if (elemento.idSap === id) {
      resultado = elemento;
      return;
    }
  });
  return resultado;
};
