document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light");
        themeToggle.textContent = "🌙";
    } else {
        themeToggle.textContent = "🌤️";
    }

    // Toggle theme
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "🌤️";
        }
    });

    // Ensure social icons never turn blue
    const socialLinks = document.querySelectorAll(".socials a");
    socialLinks.forEach(link => {
        link.style.color = "inherit";
    });
});

