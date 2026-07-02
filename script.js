document.addEventListener("DOMContentLoaded", () => {
    // ==============================
    // BookCycle JavaScript
    // ==============================

    // Current year in footer
    const copyright = document.querySelector(".copyright");
    if (copyright) {
        copyright.innerHTML = `© ${new Date().getFullYear()} BookCycle. All Rights Reserved.`;
    }

    // ==============================
    // Search Books
    // ==============================

    const searchInput = document.querySelector(".search-box input");
    const productCards = document.querySelectorAll(".card");

    if (searchInput) {
        searchInput.addEventListener("keyup", function () {
            const keyword = this.value.toLowerCase();
            productCards.forEach(card => {
                const title = card.querySelector("h3").textContent.toLowerCase();
                card.style.display = title.includes(keyword) ? "block" : "none";
            });
        });
    }

    // ==============================
    // Product Button
    // ==============================

    const buttons = document.querySelectorAll(".card button");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const card = this.closest(".card");
            if (!card) return;

            const title = card.querySelector("h3")?.textContent || "Book details";
            const price = card.querySelector(".price")?.textContent || "Price unavailable";
            const seller = card.querySelectorAll("p")[1]?.textContent || "Seller unavailable";

            alert(`${title}\n\n${price}\n\n${seller}\n\nThank you for your interest!`);
        });
    });

    // ==============================
    // Contact Form
    // ==============================

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = form.querySelector("input[type='text']")?.value.trim() || "";
            const email = form.querySelector("input[type='email']")?.value.trim() || "";
            const message = form.querySelector("textarea")?.value.trim() || "";

            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                return;
            }

            alert(`Thank you ${name}!\n\nWe received your message successfully.`);
            form.reset();
        });
    }

    // ==============================
    // Smooth Scroll
    // ==============================

    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });

    // ==============================
    // Card Hover Animation
    // ==============================

    productCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-12px) scale(1.03)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });

    // ==============================
    // Scroll Animation
    // ==============================

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(
        ".card, .category-card, .seller-card, .testimonial-card"
    ).forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });
});