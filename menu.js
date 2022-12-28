const lista = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})
const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = awaut res.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}



const pintarCards =



/* const productos = [
    {id: 1, nombre: "Pan Dulce", precio: 5000},
    {id: 2, nombre: "Tiramisu", precio: 4500},
    {id: 3, nombre: "Torta Footbol", precio: 3700},
    {id: 4, nombre: "Cheescakes", precio: 6200},
 ];

const template = document.querySelector('#template-list').content
const fragment = document.createDocumentFragment()
arrayLista.forEach(item => {
    template.querySelector('.list span').textContent = item
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
})
lista.appendChild(fragment)

function agregarProducto(){
}
document.getElementById("btn").onclick = function (){
    agregarProducto();
} */