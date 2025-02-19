// JavaScript to animate the video on scroll
window.addEventListener('scroll', function () {
    const video = document.getElementById('myVideo');
    const scrollY = window.scrollY;

    // Scale the video based on scroll
    const scale = 1 - (scrollY / 1000); // Adjust this divisor to control the scaling speed

    // Apply the scaling to the video with a smooth transition
    video.style.transform = `scale(${scale})`;
});
