// Script para o menu mobile
document.addEventListener('DOMContentLoaded', function() {
    // Selecionar elementos do DOM
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu');
    const menuLinks = document.querySelectorAll('#menu a');

    // Função para alternar o menu
    function toggleMenu() {
        menu.classList.toggle('active');
    }

    // Adicionar evento de clique ao botão do menu
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Fechar o menu quando um link é clicado
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });

    // Fechar o menu quando clicar fora dele
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnToggle && menu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Rolagem suave para os links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajuste para compensar a altura do menu fixo
                    behavior: 'smooth'
                });
            }
        });
    });
});
