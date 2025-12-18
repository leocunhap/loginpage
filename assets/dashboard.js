document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logout-btn');
    const userNameSpan = document.getElementById('user-name');

    // Get username from localStorage
    const userName = localStorage.getItem('userName') || 'Usuário';
    userNameSpan.textContent = userName;

    // Logout functionality
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('userName');
        window.location.href = 'index.html';
    });
});