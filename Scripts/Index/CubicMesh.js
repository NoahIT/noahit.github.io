function createCube(cubeElement) {
    for (let i = 0; i < 36; i++) {
        const section = document.createElement('div');
        section.className = 'cube-section';
        for (let j = 0; j < 36; j++) {
            const piece = document.createElement('div');
            piece.className = 'cube-piece';
            section.appendChild(piece);
        }
        cubeElement.appendChild(section);
    }
}

// Select all elements with the class "cube"
const cubes = document.querySelectorAll('.cube');

// Apply the createCube function to each cube
cubes.forEach(createCube);
