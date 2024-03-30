// Adicionando transições suaves entre páginas
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const href = this.getAttribute("href");
            setTimeout(() => {
                window.location.href = href;
            }, 300); // Tempo de transição em milissegundos
        });
    });
});
