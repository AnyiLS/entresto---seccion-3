let pregunta = 0

let puedeselecionar = false

let conteo = []

const cambiarPregunta = () => {
	$(`.tarjeta${pregunta + 1}`).css('display', 'block')
	$(`.tarjeta${pregunta}`).css('display', 'none')
	$('.verdadero').css('border', 'none')
	$('.falso').css('border', 'none')
	$('.verdadero').css('background', 'none')
	$('.falso').css('background', 'none')
	puedeselecionar = false
}

const validarResultado = () => {
	if (pregunta +1 === 10) {
		localStorage.setItem('conteo', conteo.length)
		window.location.href = './index235.html'
	} 
}

$(document).ready(function () {
	$('.falso').on('click', () => {
		if (!puedeselecionar) {
			puedeselecionar = true
			const respuesta = respuestas[pregunta]
			if (respuesta.correcto === false) {
				sonidoexitoso()
				$('.falso').css('border', '5px solid green')
				$('.falso').css('background', 'url(./imagenes/estrellas.png)')
				conteo.push(true)

				setTimeout(() => {
					validarResultado()
					pregunta++
					cambiarPregunta()
				}, 2000)
			} else {
				sonidoerroneo()
				$('.falso').css('border', '5px solid red')
				setTimeout(() => {
					$(`.car-pop${pregunta + 1}`).css('display', 'block')
				}, 2000)
			}
		}
	})

	$('.verdadero').on('click', () => {
		if (!puedeselecionar) {
			puedeselecionar = true
			const respuesta = respuestas[pregunta]
			if (respuesta.correcto === true) {
				sonidoexitoso()
				$('.verdadero').css('border', '5px solid green')
				$('.verdadero').css(
					'background',
					'url(./imagenes/estrellas.png)'
				)
				conteo.push(true)
				setTimeout(() => {
					validarResultado()
					pregunta++
					cambiarPregunta()
				}, 2000)
			} else {
				sonidoerroneo()
				$('.verdadero').css('border', '5px solid red')
				setTimeout(() => {
					$(`.car-pop${pregunta + 1}`).css('display', 'block')
				}, 2000)
			}
		}
	})

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
		$(`.car-pop${pregunta + 1}`).css('display', 'none')
		validarResultado()
		pregunta++
		cambiarPregunta()
	})

	console.log('conteo', conteo)
})
