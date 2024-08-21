// Function to play the sound
function playSound() {
    const audio = new Audio('start.mp3');
    audio.play().catch(error => {
        console.error("Error playing audio:", error);
    });
}

// Function to hide the loading screen
function hide() {
    const loadingScreen = document.getElementById("loading");

    loadingScreen.classList.remove("loading");
    loadingScreen.classList.remove("loadingHide");
    loadingScreen.classList.add("loadingDelete");
}

// Function to handle the site loading process
function loadSite() {
    const loadingScreen = document.getElementById("loading");
    
    // Hide the loading screen with a fade-out effect
    loadingScreen.classList.add("loadingHide");
    
    // Set timeout to remove the loading screen after fading out
    setTimeout(hide, 1400);
    
    // Play the sound after a delay
    setTimeout(playSound, 800);
}

// Ensure the loadSite function is called when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadSite);