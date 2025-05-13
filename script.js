// Menu Hamburguer
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// Função para fechar o menu
const closeMenu = () => {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
    const spans = hamburger.querySelectorAll('span');
    spans.forEach(span => span.classList.remove('active'));
};

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        closeMenu();
    }
});

// Efeito Parallax melhorado
window.addEventListener('scroll', () => {
    const parallaxBg = document.querySelector('.parallax-bg');
    const scrollPosition = window.pageYOffset;
    const speed = 0.5; // Velocidade do efeito parallax
    
    // Aplica o efeito parallax com suavidade
    requestAnimationFrame(() => {
        parallaxBg.style.transform = `translateY(${scrollPosition * speed}px)`;
    });

    // Fecha os detalhes dos serviços ao rolar
    document.querySelectorAll('.servico-detalhes').forEach(detalhes => {
        if (detalhes.classList.contains('active')) {
            detalhes.classList.remove('active');
            const button = detalhes.nextElementSibling;
            button.classList.remove('active');
            button.textContent = 'Saiba mais';
        }
    });

    // Fecha o menu ao rolar
    closeMenu();
});

// Smooth Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Fecha o menu mobile após clicar em um link
            closeMenu();
        }
    });
});

// Controle dos detalhes dos serviços
document.querySelectorAll('.saiba-mais').forEach(button => {
    button.addEventListener('click', () => {
        const detalhes = button.previousElementSibling;
        const isActive = detalhes.classList.contains('active');
        
        if (!isActive) {
            detalhes.classList.add('active');
            button.classList.add('active');
            button.textContent = 'Fechar';
        } else {
            detalhes.classList.remove('active');
            button.classList.remove('active');
            button.textContent = 'Saiba mais';
        }
    });
});

// Animação do menu hamburguer
hamburger.addEventListener('click', () => {
    const spans = hamburger.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('active'));
});

// Adiciona classe ao header quando rolar a página
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Controle do botão "Ver mais" na seção sobre
const verMaisBtn = document.querySelector('.ver-mais');
const textoCompleto = document.querySelector('.texto-completo');

verMaisBtn.addEventListener('click', () => {
    textoCompleto.classList.toggle('active');
    verMaisBtn.classList.toggle('active');
    
    if (textoCompleto.classList.contains('active')) {
        verMaisBtn.textContent = 'Mostrar menos';
    } else {
        verMaisBtn.textContent = 'Continuar lendo';
    }
}); 