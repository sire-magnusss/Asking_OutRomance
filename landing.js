// JavaScript to handle the button interactions and flower animations

document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const modalOverlay = document.getElementById('modalOverlay');
    const phrases = [
        "Are you sure?",
        "Why are you doing this?",
        "Please reconsider!",
        "You can't say no!",
        "Think again!"
    ];
    let phraseIndex = 0;

    // Handle "Yes" button click
    yesButton.addEventListener('click', () => {
        // Show the modal overlay
        modalOverlay.style.display = 'flex';

        // Optional: Add a delay before redirecting
        setTimeout(() => {
            window.location.href = 'flowers.html'; // Redirect to the animated flowers page
        }, 5000); // Delay in milliseconds (5000ms = 5s)
    });

    // Handle "No" button click
    noButton.addEventListener('click', () => {
        if (phraseIndex < phrases.length) {
            noButton.textContent = phrases[phraseIndex];
            phraseIndex++;
        } else {
            // Make the "Yes" button grow
            yesButton.classList.add('grow');
            // Optional: Remove the "No" button
            noButton.style.display = 'none';
        }
    });

    // Generate flower animations
    const flowerContainer = document.querySelector('.flower-container');
    const createFlower = () => {
        const flower = document.createElement('div');
        flower.classList.add('flower');

        // Random position and animation duration
        const size = Math.random() * 20 + 10; // Random size between 10px and 30px
        const left = Math.random() * 100; // Random left position between 0% and 100%
        const duration = Math.random() * 5 + 5; // Random duration between 5s and 10s
        const delay = Math.random() * -20; // Random delay to stagger animations

        flower.style.width = size + 'px';
        flower.style.height = size + 'px';
        flower.style.left = left + '%';
        flower.style.animationDuration = duration + 's';
        flower.style.animationDelay = delay + 's';

        // Create petals
        for (let i = 1; i <= 8; i++) {
            const petal = document.createElement('div');
            petal.classList.add('petal');
            petal.style.transform = `rotate(${(i - 1) * 45}deg) translateY(-${size / 2}px)`;
            flower.appendChild(petal);
        }

        // Create center
        const center = document.createElement('div');
        center.classList.add('center');
        center.style.width = size * 0.8 + 'px';
        center.style.height = size * 0.8 + 'px';
        center.style.top = -size * 0.4 + 'px';
        center.style.left = -size * 0.4 + 'px';
        flower.appendChild(center);

        flowerContainer.appendChild(flower);

        // Remove flower after animation ends
        setTimeout(() => {
            flower.remove();
        }, (duration + Math.abs(delay)) * 1000);
    };

    // Create flowers at intervals
    setInterval(createFlower, 500);
});
