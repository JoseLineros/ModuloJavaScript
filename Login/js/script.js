let btnFormulario = document
	.getElementById('btnFormulario')
	.addEventListener('click', procesarFormulario);

let errores = document.getElementById('errores');

function procesarFormulario() {
	console.log('Hola');

	let usuario = document.getElementById('usuario').value;
	let password = document.getElementById('password').value;

	// usuario.tolowerCase();

	if (usuario.trim() === 'jose' && password.trim() === '123123') {
		console.log('Exito');
		window.locationf = 'api.html';
		errores.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Exito al iniciar sesion!</strong> Espera unos segundos.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>`;
		myAlertTop();
		window.location.href = 'api.html';
	} else {
		console.log('error');
		errores.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Error al iniciar sesion!</strong> Verifica tus credenciales.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>`;

		myAlertTop();
	}
}

function myAlertTop() {
	document.getElementById('errores').style.display = 'block';
	setTimeout(function () {
		document.getElementById('errores').style.display = 'none';
	}, 4000);
}
