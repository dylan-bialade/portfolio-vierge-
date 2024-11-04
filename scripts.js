document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('nav ul.tabs a');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();

            tabs.forEach(item => item.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            tab.classList.add('active');
            const content = document.querySelector(tab.getAttribute('href'));
            content.classList.add('active');
        });
    });

    // Activer le premier onglet par défaut
    if (tabs.length > 0) {
        tabs[0].classList.add('active');
        contents[0].classList.add('active');
    }
});
