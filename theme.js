document.getElementById('toggleButton').addEventListener('click', () => {
    // Toggle dark mode on the body
    document.body.classList.toggle('dark-mode');
    
    // Toggle dark mode on the button
    document.getElementById('toggleButton').classList.toggle('dark-mode');
});
