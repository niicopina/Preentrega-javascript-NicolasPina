let estado = prompt("elija entre celeste, amarillo o rojo segun la bandera del balneario");
if(estado === "celeste"){
    alert("puede nadar en el mar")
}else if(estado === "amarillo"){
    alert("nade con precaucion")
}if(estado === "rojo"){
    alert("es peligroso nadar")
};

class Comida{
    constructor(plato, cantidad, adicional){
    this.plato = plato;
    this.cantidad = cantidad;
    this.adicional = adicional;
    }
    vender(){
        this.cantidad -= 1;
    }
}
const plato1 = new Comida(prompt("ingrese plato de comida que desee pedir"), parseInt(prompt("ingrese cantidad")), prompt("ingrese adicional"));
let mensaje = `sumado al carro de compras`;
alert(mensaje);