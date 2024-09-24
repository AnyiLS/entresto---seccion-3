let offsetX,
	offsetY,
	isDragging = false,
	last_position;

const container = document.querySelector('.container')






const checkDrop = (draggable, droppable, callback) => {
	const draggableRect = document.querySelector(`.tarjeta${pregunta + 1}`).getBoundingClientRect();

	console.log(draggable)
	console.log(last_position)
	console.log(draggableRect.left)

	if (last_position < draggableRect.left) {
		draggable.style.left = '67%'
		callback('true')
	} else if (last_position > draggableRect.left){
		draggable.style.left = '6%'
		callback('false')
	} else {
		return;
	}

	
}

const handleDraggable = (draggable) => {
	document.querySelector(`.tarjeta${pregunta + 1}`).addEventListener('touchstart', (e) => {
		const touch = e.touches[0]
		last_position = draggable.getBoundingClientRect().left;
		isDragging = true
		offsetX = touch.clientX - draggable.getBoundingClientRect().left
		offsetY = touch.clientY - draggable.getBoundingClientRect().top
	})

	document.querySelector(`.tarjeta${pregunta + 1}`).addEventListener('mousedown', (e) => {
		console.log(document.querySelector(`.tarjeta${pregunta + 1}`))
		e.stopPropagation()
		last_position = document.querySelector(`.tarjeta${pregunta + 1}`).getBoundingClientRect().left;
		isDragging = true
		offsetX = e.clientX - document.querySelector(`.tarjeta${pregunta + 1}`).getBoundingClientRect().left
		// offsetY = e.clientY - draggable.getBoundingClientRect().top
		console.log('draggable', e.clientX - document.querySelector(`.tarjeta${pregunta + 1}`).getBoundingClientRect().left)
		console.log('client', container.clientWidth)
		e.preventDefault()
	})
}

const executeMoving = (draggable) => {
	document.addEventListener('touchmove', (e) => {
		if (isDragging) {
			const touch = e.touches[0]

			const minX = 32
			const maxX = 40
			let position =
				((touch.clientX - offsetX) * 100) /
				document.querySelector('.container').clientWidth

			if (position < minX) {
				document.querySelector(`.tarjeta${pregunta + 1}`).style.left = `${minX}%`
			} else if (position > maxX) {
				document.querySelector(`.tarjeta${pregunta + 1}`).style.left = `${maxX}%`
			} else {
				document.querySelector(`.tarjeta${pregunta + 1}`).style.left = `${position}%`
			}

			document.querySelector(`.tarjeta${pregunta + 1}`).style.top = `16%`
		}
	})

	container.addEventListener('mousemove', (e) => {
		if (isDragging) {
			const minX = container.clientWidth * 0.32 // 6% del contenedor
			const maxX = container.clientWidth * 0.4 // 67% del contenedor

			// Calcula la nueva posición
			let positionX = container.clientWidth > 1700 ? e.clientX - document.querySelector(`.tarjeta${pregunta + 1}`).clientWidth : e.clientX - document.querySelector(`.tarjeta${pregunta + 1}`).clientWidth * 1.5
			let positionY = e.clientY - offsetY

			if (positionX < minX) {
				positionX = minX;
			} else if (positionX > maxX) {
				positionX = maxX;
			}
			// Restringe el movimiento horizontal
			
			// if (positionX < minX) {
			// 	positionX = minX
			// } else if (positionX > maxX) {
			// 	positionX = maxX
			// }

			// Asigna la nueva posición
			document.querySelector(`.tarjeta${pregunta + 1}`).style.left = `${positionX}px`

			document.querySelector(`.tarjeta${pregunta + 1}`).style.top = `16%`
		}
	})
}

const handleDroppable = (draggable, droppable, callback) => {
	document.addEventListener('touchend', () => {
		isDragging = false
		checkDrop(draggable, droppable, callback)
	})

	document.addEventListener('mouseup', () => {
		isDragging = false
		checkDrop(draggable, droppable, callback)
	})
}
