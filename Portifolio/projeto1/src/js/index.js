document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o formulário de contato
    const form = document.querySelector('form');
    // Seleciona o campo de mensagem no formulário
    const messageInput = document.getElementById('message');
    // Define o número mínimo e máximo de caracteres para a mensagem
    const minLength = 10;
    const maxLength = 500;

    // Adiciona um evento de submissão ao formulário
    form.addEventListener('submit', function (event) {
        // Obtém o comprimento da mensagem
        const messageLength = messageInput.value.length;
        // Verifica se a mensagem está dentro do limite de caracteres
        if (messageLength < minLength || messageLength > maxLength) {
            // Impede o envio do formulário se a mensagem não estiver dentro do limite
            event.preventDefault();
            // Exibe um alerta informando o usuário sobre o limite de caracteres
            alert(`A mensagem deve ter entre ${minLength} e ${maxLength} caracteres.`);
        }
    });

    // Seleciona todas as seções da página
    const sections = document.querySelectorAll('section');
    // Seleciona todos os links de navegação no menu
    const navLinks = document.querySelectorAll('.Menus nav a');

    // Adiciona um evento de rolagem à janela
    window.addEventListener('scroll', function () {
        let current = '';
        // Itera sobre cada seção para verificar qual está atualmente visível
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Verifica se a seção está no viewport
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        // Itera sobre cada link de navegação
        navLinks.forEach(link => {
            // Remove a classe 'active' de todos os links
            link.classList.remove('active');
            // Adiciona a classe 'active' ao link correspondente à seção visível
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});

// Função para exibir um alerta ao enviar o formulário
function handleSubmit(event) {
    alert('Mensagem enviada com sucesso!');
    return true; // Permite que o formulário seja enviado
}