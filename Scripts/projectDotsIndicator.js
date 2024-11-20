document.addEventListener('DOMContentLoaded', () => {
    const projectContainers = document.querySelectorAll('.project-container');

    projectContainers.forEach(container => {
        const images = container.querySelectorAll('.project-img-container img');
        const dotsContainer = container.querySelector('.dots-container');

        // Create dots
        images.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll('.dot');

        let currentIndex = 0;

        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            images[index].classList.add('active');
            dots[index].classList.add('active');
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        // Change image every 3 seconds
        setInterval(nextImage, 4000);

        // Add click event to dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                showImage(currentIndex);
            });
        });
    });
});