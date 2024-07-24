function createSparkles() {
    const container = document.getElementById('sparkles-container');
    const numberOfSparkles = 150; // Increase the number of sparkles

    for (let i = 0; i < numberOfSparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random position within the container
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        sparkle.style.top = `${y}%`;
        sparkle.style.left = `${x}%`;

        // Random animation delay
        const delay = Math.random() * 2; // Delay between 0s and 2s
        sparkle.style.animationDelay = `${delay}s`;

        container.appendChild(sparkle);
    }
}

createSparkles();