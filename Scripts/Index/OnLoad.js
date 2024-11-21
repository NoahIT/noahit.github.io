document.addEventListener('DOMContentLoaded', () => {
    // Function to animate blur elements
    const animateBlurs = (className, delay) => {
      const blurs = document.querySelectorAll(`.${className}`);
      blurs.forEach((blur, index) => {
        setTimeout(() => {
          blur.style.opacity = '1';
          blur.style.transform = 'scale(1) rotate(0deg)';
        }, delay + index * 200);
      });
    };
  
    // Function to animate cards
    const animateCards = () => {
      const cards = document.querySelectorAll('.card');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0) scale(1)';
        }, 1000 + index * 200);
      });
    };
  
    // Function to animate navbar
    const animateNavbar = () => {
      const navbar = document.querySelector('.navbar');
      setTimeout(() => {
        navbar.style.opacity = '1';
        navbar.style.transform = 'translateY(0)';
      }, 500);
    };
  
    // Function to animate footer
    const animateFooter = () => {
      const footer = document.querySelector('footer');
      setTimeout(() => {
        footer.style.opacity = '1';
        footer.style.transform = 'translateY(0)';
      }, 2000);
    };
  
    // Create and append initial styles
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .blur-img, .red-img, .orange-img, .green-img {
        opacity: 0;
        transform: scale(0.5) rotate(-45deg);
        transition: all 0.5s ease-out;
      }
      .card {
        opacity: 0;
        transform: translateY(50px) scale(0.9);
        transition: all 0.5s ease-out;
      }
      .navbar {
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.5s ease-out;
      }
      footer {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.5s ease-out;
      }
    `;
    document.head.appendChild(styleElement);
  
    // Trigger animations
    animateBlurs('blur-img', 0);
    animateBlurs('red-img', 200);
    animateBlurs('orange-img', 400);
    animateBlurs('green-img', 600);
    animateCards();
    animateNavbar();
    animateFooter();
  });