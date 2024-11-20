function createLines() {
    const bg = document.querySelector('.abstract-bg');

    // Create solid lines
    for (let i = 0; i < 4; i++) {
        const line = document.createElement('div');
        line.className = 'line';
        line.style.top = `${20 + i * 20}%`;
        line.style.animation = `moveLine ${15 + i * 2}s linear infinite ${-i * 5}s`;
        bg.appendChild(line);
    }

    // Create dashed lines
    for (let i = 0; i < 3; i++) {
        const dashedLine = document.createElement('div');
        dashedLine.className = 'dashed-line';
        dashedLine.style.top = `${30 + i * 20}%`;
        dashedLine.style.animation = `moveLine ${25 + i * 3}s linear infinite ${-i * 8}s`;
        bg.appendChild(dashedLine);
    }
}

document.addEventListener('DOMContentLoaded', createLines);