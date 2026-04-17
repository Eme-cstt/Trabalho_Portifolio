document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('meuFormulario');

    // Verificação de segurança: o formulário existe na página?
    if (!formulario) {
        console.error("Erro: Não encontrei um formulário com o ID 'meuFormulario'.");
        return;
    }

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // 1. Validação de E-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        // 2. Exibição da Mensagem (Alerta + DOM)
        // Primeiro o alerta conforme sua instrução pedagógica
        alert("Mensagem enviada com sucesso!");

        // Segundo, vamos criar/exibir um elemento visual na página
        let feedback = document.getElementById('mensagemSucesso');
        
        // Se o elemento não existir no seu HTML, o JS cria ele agora:
        if (!feedback) {
            feedback = document.createElement('p');
            feedback.id = 'mensagemSucesso';
            formulario.parentNode.insertBefore(feedback, formulario.nextSibling);
        }

        // 3. Limpeza do formulário
        formulario.reset();

        // 4. Desaparecer a mensagem após 5 segundos
        setTimeout(() => {
            feedback.style.display = "none";
        }, 5000);
    });
});















document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica se o usuário já tinha uma preferência salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
    }

    themeToggle.addEventListener('click', () => {
        // Alterna a classe
        body.classList.toggle('light-mode');
        
        // Salva a preferência no navegador
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
});