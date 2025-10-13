// --- CONTROLE DAS ABAS DE PROJETOS ---
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

// --- CONTROLE DAS ABAS DE HABILIDADES ---
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
    // Garante que a primeira aba de projetos esteja ativa
    const webTab = document.getElementById("web");
    if (webTab) {
        webTab.classList.add('active');
    }

    // Garante que a primeira aba de habilidades esteja ativa
    const devTab = document.getElementById("desenvolvimento");
    if (devTab) {
        devTab.classList.add('active');
    }
});