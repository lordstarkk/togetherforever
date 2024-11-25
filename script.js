// Function to trigger confetti animation when the page loads
window.onload = function() {
    // Trigger confetti animation
    confetti({
        particleCount: 300,
        spread: 160,
        origin: { y: 0.6 },
        colors: ['#ff6e6e', '#ff6347', '#ffb6c1'] // Custom celebration colors
    });
    
    // Optionally, trigger a timer function after confetti
    startTimer();
};



// Set the exact date and time when you started your relationship
const startDate = new Date("2024-09-26T17:31:00"); // Format: YYYY-MM-DDTHH:MM:SS

// Function to update the timer every second
function updateTimer() {
    const now = new Date();
    const timeDifference = now - startDate; // Time difference in milliseconds

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the HTML elements
    document.getElementById('days').textContent = `${days}`;
    document.getElementById('hours').textContent = `${hours}`;
    document.getElementById('minutes').textContent = `${minutes}`;
    document.getElementById('seconds').textContent = `${seconds}`;
}

// Update the timer every second
setInterval(updateTimer, 1000);
