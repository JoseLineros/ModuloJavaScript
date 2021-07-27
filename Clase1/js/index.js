//node Clase1/js/index.js
let string = 'Jose';
let number = 18;
let array = [1, 2, 3, 4, 5, 6];
let object = { nombre: 'Michael ', role: 'instructor BIT' };
let boolean = false;

let datos = document.getElementById('datos');
datos.innerHTML = `El nombre ingresado es: ${string}, la edad es ${number}<br>
\nEl array es: ${array}<br>
\nEl objeto es: Nombre: ${object.nombre} Role ${object.role}<br>
\nEl Boolean es: ${boolean}
`;

/* Condicionales */
console.log('Verifica si es mayor de edad');
console.log(`la edad capturada fue ${number}`);
if (number >= 18) {
	console.log('Eres mayor de edad');
	boolean = true;
	console.log(boolean);
} else {
	console.log('No eres mayor de edad');
}
