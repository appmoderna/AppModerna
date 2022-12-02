const producto=[{avatar_url:'https://modernaalimentos.com.ec/wp-content/uploads/2022/01/moderna-alimentos-productos-comercializados-bizcochox.jpg'
,producto:"Bizcochox"
,cantidadProducto:"5"
,cantidadConfirmada:"5"
,precio:"2.50"
,precioventa:'3.50'
,preciototal:'25'}];

export const agregarproducto=(productonuevo)=>{
    producto.push(productonuevo);
    console.log("---------------------------------------------------------")
    console.log("El arreglo del producto es: ",producto)
    
}

export const traerproductos=()=>{
    return producto;
}