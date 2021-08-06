//* Numeros primos si es divisible por si mismo y la unidad
console.log('%c Numeros primos! ', 'background: #222; color: #bada55');
// let inputPrimos = document.getElementById('inputPrimos').value;
// let inputPrimosConvertidos = parseInt(inputPrimos);

function esPrimo(num) {
	let primo = true;
	if (num < 2) primo = false; //return false;
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			primo = false; //return false;
			break;
		}
	}
	return primo; // return true;
}

let numerosPrimos = document.getElementById('numerosPrimos');
for (var i = 0; i < 100; i++) {
	if (esPrimo(i)) {
		numerosPrimos.innerHTML += `${i}-`;
		console.log(i);
	}
}