document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Limpa mensagens de erro
    document.getElementById('emailError').textContent = '';
    document.getElementById('nameError').textContent = '';

    // Captura os valores dos campos
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;

    // Validação do email usando RegEx
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;

    if (!email) {
        document.getElementById('emailError').textContent = 'Email é obrigatório.';
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Email inválido.';
        valid = false;
    }

    if (!name) {
        document.getElementById('nameError').textContent = 'Nome é obrigatório.';
        valid = false;
    }

    // Se tudo estiver válido, armazena os dados no LocalStorage
    if (valid) {
        const subscriber = {
            email: email,
            name: name
        };
        localStorage.setItem('subscriber', JSON.stringify(subscriber));
        alert('Inscrição realizada com sucesso!');
        // Opcional: limpar o formulário
        document.getElementById('form').reset();
    }
});
