export function setupAuthForms() {
    document.addEventListener('DOMContentLoaded', () => {
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailOrPhone = document.getElementById('emailOrPhone').value;
            const password = document.getElementById('password').value;

            // Handle login logic here
            console.log('Login with:', emailOrPhone, password);
            window.location.href = 'departments.html';
        });

        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newEmail = document.getElementById('newEmail').value;
            const newPhone = document.getElementById('newPhone').value;
            const newPassword = document.getElementById('newPassword').value;

            // Handle registration logic here
            console.log('Register with:', newEmail, newPhone, newPassword);
            showLoginForm(); // Show login form after registration
        });
    });
}

export function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

export function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}
