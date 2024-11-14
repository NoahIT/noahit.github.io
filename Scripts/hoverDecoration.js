const hoverDecoration = document.getElementById('hoverDecoration');
const cards = document.querySelectorAll('.card');

const validColors = ['blue', 'red', 'orange', 'green'];

cards.forEach(card => {
    const color = card.id.replace('Card', '');
    const blurDiv = document.getElementById(`${color}Blurs`);

    card.addEventListener('mouseenter', () => {
        if (validColors.includes(color)) {
            hoverDecoration.style.opacity = '0';
            blurDiv.style.opacity = '1';
        }
    });

    card.addEventListener('mouseleave', () => {
        if (validColors.includes(color)) {
            hoverDecoration.style.opacity = '1';
            blurDiv.style.opacity = '0';
        }
    });
});