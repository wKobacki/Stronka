export function setupAuthForms() {
    document.addEventListener('DOMContentLoaded', () => {
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const passwordChangeForm = document.getElementById('password-change-form');

        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;

                // Handle login logic here
                console.log('Login with:', email, password);
                window.location.href = 'departments.html';
            });
        } else {
            console.error('Login form not found');
        }

        if (registerForm) {
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const newEmail = document.getElementById('newEmail').value;
                const newName = document.getElementById('newName').value;
                const newSurname = document.getElementById('newSurname').value
                const newPassword = document.getElementById('newPassword').value;
                const newBranch = document.getElementById('newBranch').value

                // Handle registration logic here
                console.log('Register with:', newEmail, newName, newSurname, newBranch, newPassword);
                showLoginForm(); // Show login form after registration
            });
        } else {
            console.error('Register form not found');
        }

        if (passwordChangeForm) {
            passwordChangeForm.addEventListener('submit', (e) => { // Corrected 'sumbit' to 'submit'
                e.preventDefault();
                const OldPassword = document.getElementById('OldPassword').value;
                const NewPassword = document.getElementById('NewPassword').value;
                const ConfirmNewPassword = document.getElementById('ConfirmNewPassword').value;
        
                if (NewPassword !== ConfirmNewPassword) { // Use strict inequality
                    console.log('Passwords do not match');
                } else {
                    console.log('Password changed');
                }
            });
        } else {
            console.error('Change password form not found');
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

export function showChangedPassword() {
    const passwordChangeForm = document.getElementById('password-change-form');
    
    if (passwordChangeForm) {  // Sprawdzenie, czy element istnieje
        passwordChangeForm.style.display = 'block';
    } else {
        console.error('Formularz zmiany hasła nie został znaleziony');
    }
}
