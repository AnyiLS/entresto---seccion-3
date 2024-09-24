let offsetX,
	offsetY,
	isDragging = false

const container = document.querySelector('.container')

const checkDrop = (draggable, droppable, callback) => {
	const draggableRect = draggable.getBoundingClientRect();
	const droppableRect = droppable.getBoundingClientRect();

	if (
		draggableRect.left < droppableRect.right &&
		draggableRect.right > droppableRect.left &&
		draggableRect.top < droppableRect.bottom &&
		draggableRect.bottom > droppableRect.top
	) {
		// Aquí asumimos que draggable tiene una propiedad de estilo 'left' que podemos modificar
		const movementDirection = draggableRect.left < droppableRect.left ? 'right' : 'left';
		
		if (movementDirection === 'left') {
			draggable.style.left = '6%';
		} else {
			draggable.style.left = '67%';
		}

		callback();
	}
}

const handleDraggable = (draggable) => {
	draggable.addEventListener('touchstart', (e) => {
		const touch = e.touches[0]
		isDragging = true
		offsetX = touch.clientX - draggable.getBoundingClientRect().left
		offsetY = touch.clientY - draggable.getBoundingClientRect().top
	})

	draggable.addEventListener('mousedown', (e) => {
		e.stopPropagation()
		isDragging = true
		offsetX = e.clientX - draggable.getBoundingClientRect().left
		// offsetY = e.clientY - draggable.getBoundingClientRect().top
		console.log('draggable', e.clientX - draggable.getBoundingClientRect().left)
		console.log('client', container.clientWidth)
		e.preventDefault()
	})
}

const executeMoving = (draggable) => {
	document.addEventListener('touchmove', (e) => {
		if (isDragging) {
			const touch = e.touches[0]

			const minX = 6
			const maxX = 67
			let position =
				((touch.clientX - offsetX) * 100) /
				document.querySelector('.container').clientWidth

			if (position < minX) {
				draggable.style.left = `${minX}%`
			} else if (position > maxX) {
				draggable.style.left = `${maxX}%`
			} else {
				draggable.style.left = `${position}%`
			}

			draggable.style.top = `17%`
		}
	})

	container.addEventListener('mousemove', (e) => {
		if (isDragging) {
			const minX = container.clientWidth * 0.06 // 6% del contenedor
			const maxX = container.clientWidth * 0.67 // 67% del contenedor

			// Calcula la nueva posición
			let positionX = container.clientWidth > 1700 ? e.clientX - draggable.clientWidth : e.clientX - draggable.clientWidth * 1.5
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
			draggable.style.left = `${positionX}px`

			draggable.style.top = `17%`
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
