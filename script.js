// --- CONTROLO DAS ABAS DE PROJECTOS ---
function openTab(evt, tabName) {
    const tabContents = document.querySelectorAll("#projetos .tab-content");
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    const tabLinks = document.querySelectorAll("#projetos .tab-link");
    tabLinks.forEach(link => {
        link.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// --- CONTROLO DAS ABAS DE HABILIDADES ---
function openSkillTab(evt, tabName) {
    const tabContents = document.querySelectorAll("#habilidades .skill-tab-content");
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    const tabLinks = document.querySelectorAll("#habilidades .skill-tab-link");
    tabLinks.forEach(link => {
        link.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// --- CONFIGURAÇÃO INICIAL AO CARREGAR A PÁGINA ---
document.addEventListener("DOMContentLoaded", function() {
    // Garante que a primeira aba de projectos esteja activa
    const webTab = document.getElementById("web");
    if (webTab) {
        webTab.classList.add('active');
    }

    // Garante que a primeira aba de habilidades esteja activa
    const devTab = document.getElementById("desenvolvimento");
    if (devTab) {
        devTab.classList.add('active');
    }
});


// --- CONTROLE DO MENU HAMBÚRGUER ---
document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Função para abrir/fechar o menu
    menuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        // Muda o ícone de barras para 'X' e vice-versa
        const icon = menuBtn.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Função para fechar o menu ao clicar em um link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            // Restaura o ícone para barras
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });
});

// --- CONTROLE DO MODAL DE PROJETOS ---
document.addEventListener("DOMContentLoaded", function() {
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('.modal-close-btn');
    const overlays = document.querySelectorAll('.modal-overlay');

    // Função para abrir o modal
    const openModal = (modal) => {
        if (modal == null) return;
        modal.classList.add('active');
    };

    // Função para fechar o modal
    const closeModal = (modal) => {
        if (modal == null) return;
        modal.classList.remove('active');
    };

    // Adiciona evento de clique aos botões de abrir
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget);
            openModal(modal);
        });
    });

    // Adiciona evento de clique aos botões de fechar (o 'x')
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
        });
    });

    // Adiciona evento de clique aos overlays para fechar
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            const modal = overlay.closest('.modal');
            closeModal(modal);
        });
    });
});

// Adicione este código ao final do seu arquivo script.js

document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o elemento existe antes de iniciar
    if (document.querySelector('.typing-target')) {
        const options = {
            strings: [
                'Matheus Henrique',
                'Desenvolvedor Web',
                'Designer',
                'Pentester'
            ],
            typeSpeed: 20,      // Velocidade de digitação
            backSpeed: 25,      // Velocidade ao apagar
            backDelay: 2000,    // Tempo de espera antes de apagar
            startDelay: 500,    // Tempo de espera antes de começar
            loop: true,         // Faz a animação repetir
            showCursor: true,
            cursorChar: '|',
        };

        new Typed('.typing-target', options);
    }
});