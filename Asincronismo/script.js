const saludo = () => {
	console.log('Hola');
};

const pregunta = () => {
	setTimeout(() => {
		console.log('Como estas?');
	}, 2000);
};

pregunta();
saludo();
