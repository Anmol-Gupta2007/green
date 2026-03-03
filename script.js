// Select all goal cards
const cards = document.querySelectorAll('.goal-card');
const progressBar = document.getElementById('progressBar');
const scoreText = document.getElementById('scoreText');

// Function to update the progress bar
function updateProgress() {
    const totalGoals = cards.length;
    const activeGoals = document.querySelectorAll('.goal-card.active').length;
    
    const percentage = (activeGoals / totalGoals) * 100;
    
    progressBar.style.width = percentage + '%';
    scoreText.textContent = percentage + '% Completed';
}

// Function to handle the toggle logic
function handleToggle(checkbox) {
    // Find the parent card
    const card = checkbox.closest('.goal-card');
    
    if (checkbox.checked) {
        card.classList.add('active');
    } else {
        card.classList.remove('active');
    }

    // Update the progress bar
    updateProgress();
}

// Optional: Allow clicking the whole card to toggle
function toggleGoal(card) {
    const checkbox = card.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
    handleToggle(checkbox);
}
