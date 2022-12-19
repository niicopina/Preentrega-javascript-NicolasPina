let contenedor = document.getElementById("contenedor1");
const productos = [
    {id: 1, nombre: "clasico", precio: 5000},
    {id: 2, nombre: "despertar dulce", precio: 4500},
    {id: 3, nombre: "mix cumpleañitos", precio: 5700},
    {id: 4, nombre: "festivos", precio: 5200},
 ];

const buscar = (nombre) => {
    let producto = productos.find(item => item.nombre === nombre);
    if (producto){
        let mensaje = `
        id: ${producto.id}
        Nombre: ${producto.nombre}
        Precio: ${producto.precio} `;
        alert(mensaje);
    }else if(producto === false){
        alert("producto no encontrado");
        }else{
            producto = prompt("producto no encontrado, intente nuevamente");
            
        }
/* let nombre = prompt("ingrese el desayuno deseado entre Clasico, Despertar dulce, Mixcumpleañitos, Festivos")
buscar(nombre); */

let cantidad = parseInt(prompt("defina la cantidad a comprar"));
let total = producto.precio * cantidad;
alert(total);}



/* const totales = productos.map(item => {
    return {
        nombre: item.nombre,
        precio: item.precio * cantidad
    };
}); */

/* productos.forEach(producto => {
    let div = document.createElement("div");
    div.innerHTML = ` 
    <h2>ID: ${producto.id}</h2>
    <h3>Nombre: ${producto.nombre}</h3>
    <h4>Precio: ${producto.precio}</h4>`;
    contenedor.append(div);
}); */



