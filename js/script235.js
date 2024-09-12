const conteo = localStorage.getItem('conteo')

$(document).ready(function () {
	if (parseInt(conteo) > 8) {
		$('#felicidades').show()
        document.getElementById('texto-felicidades').textContent = `Ubicaste ${conteo} ${conteo === 1 ? 'tarjeta' : 'tarjetas'}`
		$('#intentalo').hide()
	} else {
        $('#felicidades').hide()
        document.getElementById('texto').textContent = `Solo ubicaste ${conteo} ${conteo === 1 ? 'tarjeta' : 'tarjetas'}`
		$('#intentalo').show()
        let vidas = localStorage.getItem('vidas')
        if(parseInt(vidas) - 1 === 0 ) {
            localStorage.setItem('block', new Date())
        } else {
            localStorage.setItem('vidas', parseInt(vidas) - 1)
        }
    }
})
