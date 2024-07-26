document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var heroText = document.getElementById('hero-text');
        if (heroText) {
            heroText.style.transition = 'opacity 2s';
            heroText.style.opacity = 0;
            setTimeout(function() {
                heroText.style.display = 'none';
            }, 2000); // Vänta på övergången innan du tar bort den från layout
        }
    }, 5000); // Visar texten i 5 sekunder innan fade-out börjar
});
