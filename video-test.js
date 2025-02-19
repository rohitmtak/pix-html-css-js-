// JavaScript to animate the video on scroll
window.addEventListener('scroll', function () {
    const video = document.getElementById('myVideo');
    const scrollY = window.scrollY;

    // Scale the video based on scroll
    const scale = 1 - (scrollY / 1000); // Adjust this divisor to control the scaling speed

    // Apply the scaling to the video with a smooth transition
    video.style.transform = `scale(${scale})`;
});


// Audio button functionality
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("myVideo");
    const volumeButton = document.getElementById("audioButton");
    const muteIcon = volumeButton.querySelector(".fa-volume-xmark");
    const unmuteIcon = volumeButton.querySelector(".fa-volume");

    // Ensure correct initial state
    video.muted = true;
    muteIcon.classList.add("active");
    unmuteIcon.classList.remove("active");

    volumeButton.addEventListener("click", function () {
        if (video.muted) {
            video.muted = false; // Unmute video
            muteIcon.classList.remove("active");
            unmuteIcon.classList.add("active");
        } else {
            video.muted = true; // Mute video
            muteIcon.classList.add("active");
            unmuteIcon.classList.remove("active");
        }
    });
});