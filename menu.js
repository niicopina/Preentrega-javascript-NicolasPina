const lista = document.getElementById('lista')

const arrayItem = ['item 1', 'item 2', 'item 3']

const fragment = document.createDocumentFragment()

arrayItem.forEach(item => {
    const li = document.createElement('li')
    li.classList.add('list')
    const b = document.createElement('b')
    b.textContent = 'Nombre:'
    li.appendChild(b)
    const span = document.createElement('span')
    span.classList.add('text-danger')
    span.textContent = itemli.appendChild(b)
    li.appendChild(span)
})
lista.appendChild(fragment)







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