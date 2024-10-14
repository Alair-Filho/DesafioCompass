document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    document.getElementById('emailError').textContent = '';
    document.getElementById('nameError').textContent = '';

    
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;

    
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

   
    if (valid) {
        const subscriber = {
            email: email,
            name: name
        };
        localStorage.setItem('subscriber', JSON.stringify(subscriber));
        alert('Inscrição realizada com sucesso!');
        
        document.getElementById('form').reset();
    }
});
