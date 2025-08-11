document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        const isOpen = answer.style.display === "block";

        // Close all other answers
        document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");

        // Toggle current answer
        answer.style.display = isOpen ? "none" : "block";
    });
});
