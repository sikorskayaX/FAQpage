document.addEventListener('DOMContentLoaded', (event) => {
    const toggles = document.querySelectorAll('.question-btn');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.parentNode.classList.toggle('active');
        })
    })
});
