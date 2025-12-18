document.addEventListener('DOMContentLoaded', function() {
    // Check if already logged in
    if (localStorage.getItem('userName')) {
        window.location.href = 'dashboard.html';
        return;
    }

    const togglePassword = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('senha');
    const loginForm = document.getElementById('login-form');

    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
    });

    // Form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const usuario = document.getElementById('usuario').value.trim();
        const senha = document.getElementById('senha').value.trim();
        const remember = document.getElementById('remember').checked;

        // Simple authentication (mock)
        const validUser = 'admin';
        const validPass = 'admin';

        if (usuario === validUser && senha === validPass) {
            // Store username in localStorage
            localStorage.setItem('userName', usuario);

            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        } else {
            alert('Usuário ou senha incorretos. Tente novamente.');
        }
    });

    // Forgot password (placeholder)
    document.querySelector('.forgot-password').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Funcionalidade de recuperação de senha em breve!');
    });

    // Social login placeholders
    document.querySelectorAll('.btn-social').forEach(btn => {
        btn.addEventListener('click', function() {
            alert(`Login com ${this.textContent} em breve!`);
        });
    });
});</content>
<parameter name="filePath">/Users/leocunha/Documents/loginpage/assets/script.js