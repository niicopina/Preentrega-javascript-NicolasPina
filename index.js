
const productos = [
    {id: 1, nombre: "milanesa", precio: 1000},
    {id: 2, nombre: "pizza", precio: 1500},
    {id: 3, nombre: "tarta", precio: 700},
    {id: 4, nombre: "hamburguesa", precio: 1200},
 ];

const buscar = (nombre) => {
    let producto = productos.find(item => item.nombre === nombre);
    if (producto){
        let mensaje = `
        id: ${producto.id}
        Nombre: ${producto.nombre}
        Precio: ${producto.precio} `;

        alert(mensaje);
    }else{
        alert("producto no encontrado");
    }
};
let nombre = prompt("ingrese el plato deseado")
buscar(nombre);




