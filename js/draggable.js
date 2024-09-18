let offsetX,
	offsetY,
	isDragging = false

const checkDrop = (draggable, droppable, callback) => {
	const draggableRect = draggable.getBoundingClientRect()
	const droppableRect = droppable.getBoundingClientRect()

	if (
		draggableRect.left < droppableRect.right &&
		draggableRect.right > droppableRect.left &&
		draggableRect.top < droppableRect.bottom &&
		draggableRect.bottom > droppableRect.top
	) {
		callback()
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
		isDragging = true
		offsetX = e.clientX - draggable.getBoundingClientRect().left
		offsetY = e.clientY - draggable.getBoundingClientRect().top
	})

}

const executeMoving = (draggable) => {
	document.addEventListener('touchmove', (e) => {
		if (isDragging) {
			const touch = e.touches[0]

			const minX = 6
			const maxX = 67
            let position = ((touch.clientX - offsetX) * 100) / document.querySelector('.container').clientWidth;

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
	
	document.addEventListener('mousemove', (e) => {
		if (isDragging) {
            const minX = 6,
                  maxX = 67;

            let position = ((e.clientX - offsetX) * 100) / document.querySelector('.container').clientWidth;

            if (position < minX) {
                draggable.style.left = `${minX}%`
            } else if (position > 67) {
                draggable.style.left = `${maxX}%`
            } else {
                draggable.style.left = `${position}%`
            }

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
