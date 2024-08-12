// js/forms/formHandlers.js
export function setupAuthForms() {
    document.addEventListener('DOMContentLoaded', () => {
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');

        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const emailOrPhone = document.getElementById('emailOrPhone').value;
                const password = document.getElementById('password').value;

                // Handle login logic here
                console.log('Login with:', emailOrPhone, password);
                window.location.href = 'departments.html';
            });
        } else {
            console.error('Login form not found');
        }

        if (registerForm) {
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const newEmail = document.getElementById('newEmail').value;
                const newPhone = document.getElementById('newPhone').value;
                const newPassword = document.getElementById('newPassword').value;

                // Handle registration logic here
                console.log('Register with:', newEmail, newPhone, newPassword);
                showLoginForm(); // Show login form after registration
            });
        } else {
            console.error('Register form not found');
        }
    });
}

export function showLoginForm() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm) loginForm.style.display = 'block';
    if (registerForm) registerForm.style.display = 'none';
}

export function showRegisterForm() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm) loginForm.style.display = 'none';
    if (registerForm) registerForm.style.display = 'block';
}