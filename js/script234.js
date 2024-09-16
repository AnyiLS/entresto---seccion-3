let pregunta = 0

let puedeselecionar = false

let conteo = []

const handleCheckFalse = () => {
	if (!puedeselecionar) {
		puedeselecionar = true
		const respuesta = respuestas[pregunta]
		if (respuesta.correcto === false) {
			const event = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });

            // Despacha el evento sobre el elemento
            document.querySelector('.verdadero').dispatchEvent(event);
			sonidoexitoso()
			$('.falso').css('border', '5px solid green')
			$('.falso').css('background', 'url(./imagenes/estrellas.png)')
			conteo.push(true)

			setTimeout(() => {
				validarResultado()
				if (pregunta + 1 < 10) {
					pregunta++
					cambiarPregunta()
				}
			}, 2000)
		} else {
			const event = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });

            // Despacha el evento sobre el elemento
            document.querySelector('.verdadero').dispatchEvent(event);
			sonidoerroneo()
			$('.falso').css('border', '5px solid red')
			setTimeout(() => {
				$(`.car-pop${pregunta + 1}`).css('display', 'block')
			}, 2000)
		}
	}
}

const handleCheckTrue = () => {
	if (!puedeselecionar) {
		puedeselecionar = true
		const respuesta = respuestas[pregunta]
		if (respuesta.correcto === true) {
			const event = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });

            // Despacha el evento sobre el elemento
            document.querySelector('.verdadero').dispatchEvent(event);
			sonidoexitoso()
			$('.verdadero').css('border', '5px solid green')
			$('.verdadero').css(
				'background',
				'url(./imagenes/estrellas.png)'
			)
			conteo.push(true)
			setTimeout(() => {
				$('.verdadero').on('click', () => {});
				validarResultado()
				if (pregunta + 1 < 10) {
					pregunta++
					cambiarPregunta()
				}
			}, 2000)
		} else {
			const event = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });

            // Despacha el evento sobre el elemento
            document.querySelector('.verdadero').dispatchEvent(event);
			sonidoerroneo()
			$('.verdadero').css('border', '5px solid red')
			setTimeout(() => {
				$(`.car-pop${pregunta + 1}`).css('display', 'block')
			}, 2000)
		}
	}
}

const cambiarPregunta = () => {
	$(`.tarjeta${pregunta + 1}`).css('display', 'block')
	$(`.tarjeta${pregunta}`).css('display', 'none')
	$('.verdadero').css('border', 'none')
	$('.falso').css('border', 'none')
	$('.verdadero').css('background', 'none')
	$('.falso').css('background', 'none')
	puedeselecionar = false
	handleDraggable(document.querySelector(`.tarjeta${pregunta + 1}`))
	executeMoving(document.querySelector(`.tarjeta${pregunta + 1}`))
	handleDroppable(document.querySelector(`.tarjeta${pregunta + 1}`), document.querySelector('.falso'), handleCheckFalse)
	handleDroppable(document.querySelector(`.tarjeta${pregunta + 1}`), document.querySelector('.verdadero'), handleCheckTrue)
}

const validarResultado = () => {
	if (pregunta + 1 === 10) {
		localStorage.setItem('conteo', conteo.length)
		window.location.href = './index235.html'
	}
}

$(document).ready(function () {
	

	handleDraggable(document.querySelector(`.tarjeta${pregunta + 1}`))
	executeMoving(document.querySelector(`.tarjeta${pregunta + 1}`))
	handleDroppable(document.querySelector(`.tarjeta${pregunta + 1}`), document.querySelector('.falso'), handleCheckFalse)
	handleDroppable(document.querySelector(`.tarjeta${pregunta + 1}`), document.querySelector('.verdadero'), handleCheckTrue)

	$('.cerrar').on('click', () => {
		$(`.car-pop${pregunta + 1}`).css('display', 'none')
		validarResultado()
		pregunta++
		cambiarPregunta()
	})

	$('.cerrar2').on('click', () => {
		$(`.car-pop${pregunta + 1}`).css('display', 'none')
		validarResultado()
		pregunta++
		cambiarPregunta()
	})

	$('.cerrar3').on('click', () => {
		$(`.car-pop${pregunta + 1}`).css('display', 'none')
		validarResultado()
		pregunta++
		cambiarPregunta()
	})

	$('.cerrar4').on('click', () => {
		$(`.car-pop${pregunta + 1}`).css('display', 'none')
		validarResultado()
		pregunta++
		cambiarPregunta()
	})

	$('.cerrar5').on('click', () => {
		$(`.car-pop${pregunta + 1}`).css('display', 'none')
		validarResultado()
		pregunta++
		cambiarPregunta()
	})

	$('.cerrar6').on('click', () => {
		$(`.car-pop${pregunta + 1}`).css('display', 'none')
		validarResultado()
		pregunta++
		cambiarPregunta()
	})

	$('.cerrar7').on('click', () => {
		$(`.car-pop${pregunta + 1}`).css('display', 'none')
		validarResultado()
		pregunta++
		cambiarPregunta()
	})

	$('.cerrar8').on('click', () => {
		$(`.car-pop${pregunta + 1}`).css('display', 'none')
		validarResultado()
		pregunta++
		cambiarPregunta()
	})

	$('.cerrar9').on('click', () => {
		$(`.car-pop${pregunta + 1}`).css('display', 'none')
		validarResultado()
		pregunta++
		cambiarPregunta()
	})

	$('.cerrar10').on('click', () => {
		validarResultado()
		$(`.car-pop${pregunta + 1}`).css('display', 'none')
	})

	console.log('conteo', conteo)
})
