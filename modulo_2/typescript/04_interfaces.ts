interface Usuario {
    id: number,
    nombre: string,
    correo: string
}

const usuario1: Usuario = {
    id: 1,
    nombre: 'Pedro',
    correo: 'pedro@gmail.com'
}

console.log(usuario1);
console.log(usuario1.nombre);

interface Producto {
    id: number,
    nombre: string,
    precio?: number
}

const producto1: Producto = {
    id: 1,
    nombre: 'Laptop',
    precio: 500
}
const producto2: Producto = {
    id: 2,
    nombre: 'Monitor',
}
console.log(producto1);
console.log(producto2);