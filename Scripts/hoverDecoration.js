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
            Body.style.background =""
        }
    });

    card.addEventListener('mouseleave', () => {
        if (validColors.includes(color)) {
            hoverDecoration.style.opacity = '1';
            blurDiv.style.opacity = '0';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const body = document.body;
  
    const colorMap = {
      blueCard: '#001933',
      redCard: '#330000',
      orangeCard: '#331400',
      greenCard: '#003300'
    };
  
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        const cardColor = colorMap[card.id] || '';
        body.style.backgroundColor = cardColor;
      });
  
      card.addEventListener('mouseleave', () => {
        body.style.backgroundColor = '';
      });
    });
  });