const fireworks = document.querySelectorAll('.firework');

function randomPosition() {
    fireworks.forEach(firework => {
        // Set a random position for each firework
        const randomX = Math.random() * (window.innerWidth - 20); // Adjust for width of firework
        const randomY = Math.random() * (window.innerHeight - 20); // Adjust for height of firework
        firework.style.left = `${randomX}px`;
        firework.style.top = `${randomY}px`;
    });
}

// Start with random positions immediately
randomPosition();

// Change positions every 2 seconds
setInterval(randomPosition, 2000);
