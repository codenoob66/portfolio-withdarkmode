document.getElementById('night-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('night-mode');
    document.querySelector('.primary-header').classList.toggle('night-mode');
});
