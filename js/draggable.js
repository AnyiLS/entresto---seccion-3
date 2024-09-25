let offsetX,
	offsetY,
	isDragging = false,
	last_position

const container = document.querySelector('.container')

const checkDrop = (draggable, droppable, callback) => {
	const draggableRect = document
		.querySelector(`.tarjeta${pregunta + 1}`)
		.getBoundingClientRect()

	console.log(draggable)
	console.log(last_position)
	console.log(draggableRect.left)

	if (last_position < draggableRect.left) {
		draggable.style.left = '67%'
		callback('true')
	} else if (last_position > draggableRect.left) {
		draggable.style.left = '6%'
		callback('false')
	} else {
		return
	}
}

const handleDraggable = (draggable) => {
	document
		.querySelector(`.tarjeta${pregunta + 1}`)
		.addEventListener('touchstart', (e) => {
			e.stopPropagation()
			const touch = e.touches[0]
			last_position = draggable.getBoundingClientRect().left
			isDragging = true
			offsetX = touch.clientX - draggable.getBoundingClientRect().left
			offsetY = touch.clientY - draggable.getBoundingClientRect().top
			e.preventDefault()
		})

	document
		.querySelector(`.tarjeta${pregunta + 1}`)
		.addEventListener('mousedown', (e) => {
			e.stopPropagation()
			last_position = document
				.querySelector(`.tarjeta${pregunta + 1}`)
				.getBoundingClientRect().left
			isDragging = true
			offsetX =
				e.clientX -
				document
					.querySelector(`.tarjeta${pregunta + 1}`)
					.getBoundingClientRect().left
			e.preventDefault()
		})
}

const executeMoving = (draggable) => {
	document.addEventListener('touchmove', (e) => {
		if (isDragging) {
			const touch = e.touches[0];
			const positionX = (touch.clientX - offsetX) * 100 / container.clientWidth;

			draggable.style.left = `${Math.min(Math.max(positionX, 32), 40)}%`;
			draggable.style.top = '16%';
		}
	})

	container.addEventListener('mousemove', (e) => {
		if (isDragging) {
			let positionX = e.clientX - draggable.clientWidth / 2; // Centrar el elemento
			const minX = container.clientWidth * 0.32;
			const maxX = container.clientWidth * 0.4;

			positionX = Math.min(Math.max(positionX, minX), maxX);

			draggable.style.left = `${positionX}px`;
			draggable.style.top = '16%';
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
