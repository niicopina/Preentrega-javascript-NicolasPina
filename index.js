
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
    } else{
        alert("producto no encontrado");
        
      }  
    };
let nombre = prompt("ingrese el desayuno deseado entre Clasico, Despertar dulce, Mixcumpleañitos, Festivos")
buscar(nombre);



let cantidad = parseInt(prompt("defina la cantidad a comprar"));
const totales = productos.map((item) =>{
    return {
        nombre: producto.nombre,
        total: producto.precio * cantidad
    }
});


// ----------------------------- Eventos -------------------------------------------

let btn = document.getElementById("btn");

/* function ejecutar(){
    console.log("click en el boton");
} */
const ejecutar = () => {
    console.log("click en el boton");
}
//btn.addEventListener("click", ejecutar); ------------> primera forma
btn.onclick = ejecutar;


