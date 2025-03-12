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
