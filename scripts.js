// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinksList = document.querySelectorAll('.nav-links a');

// Alternar o menu ao clicar no botão
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Alternar ícone do menu (☰ para ✕)
    menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Fechar o menu ao clicar em um link
navLinksList.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.textContent = '☰'; // Voltar ao ícone de menu padrão
    });
});
