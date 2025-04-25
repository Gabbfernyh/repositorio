// ===========================
// POP-UP DE CONTATO
// ===========================
const openPopup = document.getElementById('open-popup');
const popupContainer = document.getElementById('popup-container');

function closePopup() {
    if (popupContainer) {
        popupContainer.classList.add('hidden');
        popupContainer.innerHTML = '';
    }
}

if (openPopup && popupContainer) {
    openPopup.addEventListener('click', (e) => {
        e.preventDefault();
        fetch('/src/pages/contact-me.html')
            .then((response) => {
                if (!response.ok) throw new Error('Erro ao carregar o arquivo contact-me.html');
                return response.text();
            })
            .then((html) => {
                popupContainer.innerHTML = html;
                popupContainer.classList.remove('hidden');
                const closeButton = popupContainer.querySelector('#close-popup');
                if (closeButton) closeButton.addEventListener('click', closePopup);
            })
            .catch((error) => console.error('Erro ao carregar o pop-up:', error));
    });
}

// ===========================
// MODAL DE TECNOLOGIAS
// ===========================
const techModal = document.getElementById('tech-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.getElementById('close-modal');

const techData = {
    HTML: "HTML é a linguagem padrão para criar páginas web.",
    CSS: "CSS é usado para estilizar páginas web.",
    JavaScript: "JavaScript adiciona interatividade às páginas web.",
    React: "React é uma biblioteca para construir interfaces de usuário.",
    "C#": "C# é uma linguagem orientada a objetos.",
    Python: "Python é versátil e fácil de aprender.",
    Git: "Git é um sistema de controle de versão.",
    Figma: "Figma é uma ferramenta de design colaborativa.",
    GitHub: "GitHub é uma plataforma para hospedagem de código.",
    TypeScript: "TypeScript adiciona tipagem estática ao JavaScript.",
    Vite: "Vite é uma ferramenta de construção rápida.",
    Angular: "Angular é um framework para aplicativos web dinâmicos."
};

document.querySelectorAll('.knowledge-item img').forEach((img) => {
    img.addEventListener('click', () => {
        const techName = img.alt;
        if (techData[techName]) {
            modalTitle.textContent = techName;
            modalDescription.textContent = techData[techName];
            techModal.classList.remove('hidden');
        }
    });
});

closeModal.addEventListener('click', () => {
    techModal.classList.add('hidden');
});

techModal.addEventListener('click', (e) => {
    if (e.target === techModal) techModal.classList.add('hidden');
});

// ===========================
// TEMA ESCURO
// ===========================
const toggleTheme = document.getElementById('toggle-theme');
toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// ===========================
// VALIDAÇÃO DO FORMULÁRIO
// ===========================
const emailInput = document.getElementById('email');
emailInput.addEventListener('input', () => {
    emailInput.style.borderColor = emailInput.value.includes('@') ? 'green' : 'red';
});

// ===========================
// LOADING SPINNER
// ===========================
function showLoading() {
    document.getElementById('loading-spinner').classList.remove('hidden');
}

function hideLoading() {
    document.getElementById('loading-spinner').classList.add('hidden');
}