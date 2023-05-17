const draggableElements = document.querySelectorAll('.draggable')
const droppableElements = document.querySelectorAll('.droppable')


draggableElements.forEach(elem => {
    elem.addEventListener('dragstart', dragStart)
})


droppableElements.forEach(elem => {
    elem.addEventListener('dragenter', dragEnter)
    elem.addEventListener('dragover', dragOver)
    elem.addEventListener('dragleave', dragLeave)
    elem.addEventListener('drop', drop)
})


// Drag and Drop functions

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id)
}


function dragEnter(event) {
    if (!event.target.classList.contains('dropped')) {
        event.target.classList.add('droppable-hover')
    }
}

function dragOver(event) {
    if (!event.target.classList.contains('dropped')) {
        event.preventDefault()
    }
}

function dragLeave(event) {
    if (!event.target.classList.contains('dropped')) {
        event.target.classList.remove('droppable-hover')
    }
}

function drop(event) {
    event.preventDefault()
    event.target.classList.remove('droppable-hover')
    const draggableElementData = event.dataTransfer.getData('text')
    const droppableElementData = event.target.getAttribute('data-draggable-id')
    if (draggableElementData === droppableElementData) {
        event.target.classList.add('dropped')
        const draggableElement = document.getElementById(draggableElementData)
        event.target.style.backgroundColor = draggableElement.style.color
        draggableElement.classList.add('dragged')
        draggableElement.setAttribute('draggable', 'false')
        event.target.insertAdjacentHTML('afterbegin', `<i class="fa-solid fa-${draggableElementData}"></i>`)
    }
}

// function drop(event) {
//     event.preventDefault(); // This is in order to prevent the browser default handling of the data
//     event.target.classList.remove("droppable-hover");
//     const draggableElementData = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method
//     const droppableElementData = event.target.getAttribute("data-draggable-id");
//     const isCorrectMatching = draggableElementData === droppableElementData;
//     if (isCorrectMatching) {
//         const draggableElement = document.getElementById(draggableElementData);
//         event.target.classList.add("dropped");
//         // event.target.style.backgroundColor = draggableElement.style.color; // This approach works only for inline styles. A more general approach would be the following: 
//         event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;
//         draggableElement.classList.add("dragged");
//         draggableElement.setAttribute("draggable", "false");
//         event.target.insertAdjacentHTML("afterbegin", `<i class="fas fa-${draggableElementData}"></i>`);
//     }
// }





















