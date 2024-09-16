let offsetX, offsetY, isDragging = false;

const checkDrop = (draggable, droppable, callback) => {
    const draggableRect = draggable.getBoundingClientRect();
    const droppableRect = droppable.getBoundingClientRect();

    if (draggableRect.left < droppableRect.right &&
        draggableRect.right > droppableRect.left &&
        draggableRect.top < droppableRect.bottom &&
        draggableRect.bottom > droppableRect.top) {
        callback()
    }
}

const handleDraggable = (draggable) => {
    draggable.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        isDragging = true;
        offsetX = touch.clientX - draggable.getBoundingClientRect().left;
        offsetY = touch.clientY - draggable.getBoundingClientRect().top;
    });
}

const executeMoving = (draggable) => {
    document.addEventListener('touchmove', (e) => {
        if (isDragging) {
            const touch = e.touches[0];
            draggable.style.left = `${touch.clientX - offsetX}px`;
            draggable.style.top = `${touch.clientY - offsetY}px`;
        }
    });

    draggable.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - draggable.getBoundingClientRect().left;
        offsetY = e.clientY - draggable.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            draggable.style.left = `${e.clientX - offsetX}px`;
            draggable.style.top = `${e.clientY - offsetY}px`;
        }
    });  
}

const handleDroppable = (draggable, droppable, callback) => {
    document.addEventListener('touchend', () => {
        isDragging = false;
        checkDrop(draggable, droppable, callback);
    })

    document.addEventListener('mouseup', () => {
        isDragging = false;
        checkDrop(draggable, droppable, callback);
    });
}