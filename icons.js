(() => {
    const container = document.getElementById("container");
  
    const circles = container.querySelectorAll(".circle");
    const circleElements = Array.from(circles);
  
    // Define an array of colors
    const colors = ['#ffdd00', '#ff618b', '#ff618b', '#ffdd00', '#ec55bf', '#ec55bf', '#ff618b', '#ff618b', '#8f00ff'];
  
    const expandCircle = (target, index) => {
      const targetRect = target.getBoundingClientRect();
      const targetCenterX = targetRect.x + targetRect.width / 2;
      const targetCenterY = targetRect.y + targetRect.height / 2;
  
      // Calculate the positions and transformations for each circle
      circleElements.forEach((circle, i) => {
        const circleRect = circle.getBoundingClientRect();
        const circleCenterX = circleRect.x + circleRect.width / 2;
        const circleCenterY = circleRect.y + circleRect.height / 2;
        
        const deltaX = circleCenterX - targetCenterX;
        const deltaY = circleCenterY - targetCenterY;
  
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const moveDistance = distance * 0.5; // Adjust this value for spacing
  
        const angle = Math.atan2(deltaY, deltaX);
        const moveX = moveDistance * Math.cos(angle);
        const moveY = moveDistance * Math.sin(angle);
  
        if (circle === target) {
          circle.style.transform = "scale(1.2) rotate(-45deg)"; // Scale up and rotate 360 degrees
          circle.style.zIndex = "1";
          circle.style.backgroundColor = colors[i]; // Assign different color based on index
        } else {
          circle.style.transform = `translate(${moveX}px, ${moveY}px)`;
          circle.style.zIndex = "0";
          circle.style.backgroundColor = "white"; // Reset background color
        }
      });
    };
  
    circles.forEach((circle, index) => {
      circle.addEventListener("click", () => {
        expandCircle(circle, index);
      });
    });
  
    const switchButton = document.getElementById('switch');
    const toggleTheme = () => {
      switchButton.classList.toggle('checked');
      document.documentElement.classList.toggle('vision-ui');
    };
    
    switchButton.addEventListener('click', toggleTheme);
    
    toggleTheme();
    expandCircle(circleElements[4], 4); // Index 4 corresponds to icon5
})();
