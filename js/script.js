window.addEventListener('load', function () {
	console.log('Diseñado por Cronna');

	const formulario = document.querySelector('.form-reservas');
	const nombreInput = document.getElementById('nombreForm');
	const telefonoInput = document.getElementById('telefonoForm');
	const fechaInput = document.getElementById('fechaForm');
	const personasSelect = document.getElementById('personasForm')
	const reservasButton = document.getElementById('btnReservar');

	const fechaMinima = new Date();
	fechaMinima.setDate(fechaMinima.getDate() + 1);

	function validarCampos() {
		let inputValido = true;
		
		if (nombreInput.value.trim() == '') {
			alert("Nombre requerido");
			inputValido = false
		}
		if (telefonoInput.value.trim() == '') {
			alert("Telefono requerido")
			inputValido = false
		}
		if (fechaInput.value.trim() == '' || new Date(fechaInput.value) < fechaMinima) {
			alert('Fecha de reservación invalida. Debe ser mayor a ' + fechaMinima.toLocalDateString())
			inputValido = false;
		}

		return inputValido;
	}

	function enviarFormulario() {
		if (validarCampos()) {
			console.log('test');
			reservasButton.textContent = "Reservando..."
			reservasButton.disabled = true;

			setTimeout(() => {
				alert("Reservación éxitosa")
				reservasButton.textContent = "Reservar"
				reservasButton.disabled = false;
			}, 2000)
		}
	}

	document.addEventListener('submit', function(e) {
		e.preventDefault();
		enviarFormulario()
	})
});