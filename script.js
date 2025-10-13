function openTab(evt, tabName) {
    // Pega todos os elementos com a classe "tab-content" e os esconde
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(content => {
        content.style.display = "none";
        content.classList.remove('active');
    });

    // Pega todos os links das abas e remove a classe "active"
    const tabLinks = document.querySelectorAll(".tab-link");
    tabLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Mostra a aba atual e adiciona a classe "active" ao botão que abriu a aba
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// Garante que a primeira aba esteja visível ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("web").style.display = "block";
});

// ADICIONE ISTO AO SEU SCRIPT.JS

// Reinicia a animação de digitação no título
const headline = document.getElementById("headline");
if (headline) {
    headline.addEventListener("animationend", () => {
        // Você pode remover e adicionar a classe para reiniciar a animação se necessário
        // Por enquanto, a animação só roda uma vez ao carregar
    });
}


// SUBSTITUA A FUNÇÃO ANTIGA POR ESTA
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

// APAGUE OS DOIS BLOCOS "DOMContentLoaded" ANTIGOS E ADICIONE ESTE
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