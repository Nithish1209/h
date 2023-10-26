// Function to update the countdown timer
function updateCountdown() {
    const birthday = new Date('2023-10-27'); // Replace with the birthday date
    const now = new Date();
    const timeDiff = birthday - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    const countdownTimer = document.getElementById('countdown-timer');
    countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Call the updateCountdown function to start the countdown
updateCountdown();
setInterval(updateCountdown, 1000);
