document.addEventListener("DOMContentLoaded", function () {
    const signInTab = document.getElementById("signInTab");
    const signUpTab = document.getElementById("signUpTab");
    const signInForm = document.getElementById("signInForm");
    const signUpForm = document.getElementById("signUpForm");
    const passwordInput = document.getElementById("password"); // Get the password input
    const passwordToggle = document.querySelector(".password-container i"); // Get the eye icon

    // Function to toggle active class
    function switchTab(activeTab, inactiveTab, activeForm, inactiveForm) {
        activeTab.classList.add("active");
        inactiveTab.classList.remove("active");
        activeForm.classList.add("active");
        inactiveForm.classList.remove("active");
    }

    // Click event for Sign In Tab
    signInTab.addEventListener("click", function () {
        switchTab(signInTab, signUpTab, signInForm, signUpForm);
    });

    // Click event for Sign Up Tab
    signUpTab.addEventListener("click", function () {
        switchTab(signUpTab, signInTab, signUpForm, signInForm);
    });
    // Password toggle functionality
    passwordToggle.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            passwordToggle.classList.remove("fa-eye-slash");
            passwordToggle.classList.add("fa-eye");
        } else {
            passwordInput.type = "password";
            passwordToggle.classList.remove("fa-eye");
            passwordToggle.classList.add("fa-eye-slash");
        }
    });
});