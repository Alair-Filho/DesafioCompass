document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    
    errorMessage.textContent = '';

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errorMessage.textContent = 'O campo email é obrigatório.';
        return;
    } else if (!emailRegex.test(email)) {
        errorMessage.textContent = 'Por favor, insira um email válido.';
        return;
    }

    
    if (!password) {
        errorMessage.textContent = 'O campo senha é obrigatório.';
        return;
    }

    
    window.location.href = 'index3.html';
});
