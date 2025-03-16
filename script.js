document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach((bar) => {
        const width = bar.style.width; // ambil width dari elemen
        bar.style.width = "0";
        setTimeout(() => {
            bar.style.width = width; // jalankan animasi perubahan width
        }, 100); 
    });
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function () {
        let navbarCollapse = document.querySelector("#navbarNav");
        if (navbarCollapse.classList.contains("show")) {
            navbarCollapse.classList.remove("show");
        }
    });
});