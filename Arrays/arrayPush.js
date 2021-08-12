// let newArray = ['Michael'];
// newArray.push('Orlando');
// console.log(newArray);

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let pares = [];
let impares = [];

for (let i in array) {
	console.log(array[i]);
	if (array[i] % 2 === 0) {
		pares.push(array[i]);
	} else {
		impares.unshift(array[i]);
	}
}

console.log('Numeros pares', pares);
console.log('Numeros Impares', impares);
