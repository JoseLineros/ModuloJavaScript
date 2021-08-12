let matrix = [
	['KTM', 'Yamaha', 'Apache', 'Ducati'],
	['Chevrolet', 'Hyundai', 'Volvo', 'Mercedez', 'Dodge'],
	['Uknown', 'Cinelli', 'Campagnolo', 'bianchi', 'Skream'],
	['Maria', 'Pedro', 'Julian', 'Angello', 'Ryan'],
];

// console.log(matrix[1][1]);
console.log(matrix.length);
//se debe imprimir la matriz y los elementos de ella en reversa

let matrixSend = [];
//* Normal
// for (let i = 0; i < matrix.length; i++) {
//* Reverse
for (let i = matrix.length - 1; i >= 0; i--) {
	//* Normal
	// for (let j = 0; j < matrix[i].length; j++) {
	console.log(matrix[i]);
	// matrixSend = matrix[i][j];
	// }
	//* Reverse
	for (let j = matrix[i].length - 1; j >= 0; j--) {
		console.log(matrix[i][j]);
		// matrixSend = matrix[i][j];
	}
}
