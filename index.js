//let contenedor = document.getElementById("contenedor1");
/* const productos = [
    {id: 1, nombre: "Pan Dulce", precio: 5000},
    {id: 2, nombre: "Tiramisu", precio: 4500},
    {id: 3, nombre: "Torta Footbol", precio: 3700},
    {id: 4, nombre: "Cheescakes", precio: 6200},
 ];



function agregarProducto(){
}
document.getElementById("btn").onclick = function (){
    agregarProducto();
} */

/* let btn = document.getElementById("btn");
btn.addEventListener("click", respuestaClick)

function respuestaClick() {
    let nombre = prompt("ingrese el desayuno deseado entre Clasico, Despertar dulce, Mix cumpleañitos, Festivos");

    let producto = productos.find(item => item.nombre === nombre);
    if (producto){
        let mensaje = `
                Id: ${producto.id}
                Nombre: ${producto.nombre}
                Precio: ${producto.precio}
                `;
                alert(mensaje);}else if
                    (producto == "");alert("no aplica");
                    
                    let cantidad = parseInt(prompt("defina la cantidad a comprar"));
                    let total = producto.precio * cantidad;
                    alert(total); 


} */

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};

/* productos.forEach(producto => {
    let div = document.createElement("div");
    div.innerHTML = ` 
    <h2>ID: ${producto.id}</h2>
    <h3>Nombre: ${producto.nombre}</h3>
    <h4>Precio: ${producto.precio}</h4>`;
    contenedor.append(div);
}); */

//Eventos

/* let btn = document.getElementById("btn"); */

/* function ejecutar(){
    console.log("click en el boton");
} */
//const ejecutar = () => {
    //console.log("click en el boton");

//btn.addEventListener("click", ejecutar); ------------> primera forma
//btn.onclick = () =>{console.log("respuesta 2")}

/* boton.addEventListener("click", () => ejecutar("hey")); */


