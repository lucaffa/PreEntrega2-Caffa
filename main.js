let continuar
let orden
const carrito = []

class Producto {
    constructor(nombre, descripcion, precio){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}
const prod1 = new Producto ("MANHATTAN BURGER","Carne, lechuga, tomate, mayonesa, jamón, muzzarella, crispy bacon, huevo frito.",435)
const prod2 = new Producto ("BROOKLYN BURGER","Carne, cebolla caramelizada, salsa bbq, crispy bacon, cheddar.",435)
const prod3 = new Producto ("NYC BURGER","Carne, cebolla caramelizada, queso emmenthal, crispy bacon, aros de cebolla, salsa bbq.",435)
const prod4 = new Producto ("LAS VEGAS BURGER","Carne, crispy bacon, aros de cebolla, salsa cheddar.",435)
const prod5 = new Producto ("PHILADELPHIA BURGER","2 carne, cebolla, mostaza, ketchup, doble cheddar.",505)
const prod6 = new Producto ("VEGGIE BURGER","Burger de espinaca, mayonesa, lechuga crisp, tomate, huevo duro, queso emmenthal, cebolla",450)

class Extra {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}
const extra1 = new Extra ("Papas Fritas",170)
const extra2 = new Extra ("Bebida",120)
const extra3 = new Extra ("Papas + Bebida",190)
const extra4 = new Extra ("Nada",0)

let nombreUsuario = prompt("Por favor ingrese su nombre")

const mensajeError = () => {
    alert("Por favor escriba el número de una de las opciones disponibles")
}

const compraBurger = () => {
    do {
        orden = prompt("Hola " + nombreUsuario + " ¿Qué hamburguesa desea ordenar?" + "\n" + "\n" + "1- Manhattan - $435" + "\n" + "2- Brooklyn - $435" + "\n" + "3- NYC - $435" + "\n" + "4- Las Vegas - $435" + "\n" + "5- Philadelphia - $505" + "\n" + "6- VEGGIE - $450" + "\n")

        switch(orden) {
            case "1":
                carrito.push(prod1)
                verProducto(prod1)
                break
            case "2":
                carrito.push(prod2)
                verProducto(prod2)
                break 
            case "3":
                carrito.push(prod3)
                verProducto(prod3)
                break
            case "4":
                carrito.push(prod4)
                verProducto(prod4)
                break
            case "5":
                carrito.push(prod5)
                verProducto(prod5)
                break
            case "6":
                carrito.push(prod6)
                verProducto(prod6)
                break
            default:
                mensajeError()
        }

    } while (orden < "1" || orden > "6")

}
const compraExtras = () => {
    do {
        orden = prompt("¿Desea agregar papas o bebida?" + "\n" + "\n" + "1- Papas - $170" + "\n" + "2- Bebida - $120" + "\n" + "3- Papas + Bebida - $290" + "\n" + "4- Nada" + "\n")

        switch(orden) {
            case "1":
                carrito.push(extra1)
                break
            case "2":
                carrito.push(extra2)
                break 
            case "3":
                carrito.push(extra3)
                break
            case "4":
                carrito.push(extra4)
                break
            default:
                mensajeError()
        }

    } while (orden < "1" || orden > "4")

}

const verProducto = (prod) => {
    alert(prod.nombre + "\n" + prod.descripcion + "\n" + "\n" + "$ " + prod.precio)
}
const carritoFinal = () => {
    const total = carrito.reduce((total,producto)=> total + producto.precio,0)
    alert("CARRITO:" + "\n" + "El costo TOTAL de su pedido es: $" + total)
}
const confirmacion = () => { 
    alert("Su compra ha sido realizada con éxito. Muchas gracias!")
}
const confirmar = () => {
    switch(continuar) {
        case "1":
            continuar == "1"
            break
        case "2":
            carritoFinal()
            confirmacion()
            break 
        default:
            mensajeError()
            break
    }
}
do {

    compraBurger()
    compraExtras()

    do{
        continuar = prompt(nombreUsuario + " ¿Desea proceder con el pago o agregar más productos?" + "\n" + "\n" + "1- Agregar producto" + "\n" + "2- PAGAR" + "\n")
        confirmar()

    }while(continuar != "1" && continuar != "2")


}while (continuar == "1")

console.log(carrito)