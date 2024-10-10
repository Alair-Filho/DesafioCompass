document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obter valores dos campos
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Limpar mensagens de erro anteriores
    errorMessage.textContent = '';

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errorMessage.textContent = 'O campo email é obrigatório.';
        return;
    } else if (!emailRegex.test(email)) {
        errorMessage.textContent = 'Por favor, insira um email válido.';
        return;
    }

    // Validar senha
    if (!password) {
        errorMessage.textContent = 'O campo senha é obrigatório.';
        return;
    }

    // Se tudo estiver correto, redirecionar
    window.location.href = 'index3.html';
});
