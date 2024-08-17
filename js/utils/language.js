export function changeLanguage(language) {
    // Sprawdź, czy język jest poprawny
    const supportedLanguages = ['en', 'pl', 'ua'];
    if (!supportedLanguages.includes(language)) {
        console.error('Unsupported language:', language);
        return;
    }

    const fileName = window.location.pathname.split('/').pop();
    
    // Tworzymy URL do pliku JSON z tłumaczeniem
    const url = `../js/translation/${language}/${fileName}.json`; // Upewnij się, że to jest poprawna ścieżka
    console.log('Loading language file from:', url);


    fetch(url)
        .then(response => {
            // Sprawdzamy, czy odpowiedź jest poprawna
            if (!response.ok) {
                throw new Error(`Network response was not ok. Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Aktualizujemy formularz logowania
            const loginForm = document.getElementById('login-form');
            if (loginForm) {
                loginForm.querySelector('h2').textContent = data.main.loginForm.title;
                loginForm.querySelector('label[for="email"]').textContent = data.main.loginForm.emailLabel;
                loginForm.querySelector('label[for="password"]').textContent = data.main.loginForm.passwordLabel;
                loginForm.querySelector('button[type="submit"]').textContent = data.main.loginForm.loginButton;
                loginForm.querySelector('p').innerHTML = data.main.loginForm.registerPrompt + ' <a href="javascript:void(0)" onclick="showRegisterForm()">Register here</a>';
            }

            // Aktualizujemy formularz rejestracji
            const registerForm = document.getElementById('register-form');
            if (registerForm) {
                registerForm.querySelector('h2').textContent = data.main.registerForm.title;
                registerForm.querySelector('label[for="newEmail"]').textContent = data.main.registerForm.emailLabel;
                registerForm.querySelector('label[for="newName"]').textContent = data.main.registerForm.nameLabel;
                registerForm.querySelector('label[for="newSurname"]').textContent = data.main.registerForm.surnameLabel;
                registerForm.querySelector('label[for="newBranch"]').textContent = data.main.registerForm.branchLabel;
                registerForm.querySelector('button[type="submit"]').textContent = data.main.registerForm.registerButton;
                registerForm.querySelector('p').innerHTML = data.main.registerForm.loginPrompt + ' <a href="javascript:void(0)" onclick="showLoginForm()">Login here</a>';
                
                // Aktualizujemy opcje wyboru oddziału
                const branchSelect = document.getElementById('newBranch');
                if (branchSelect) {
                    branchSelect.innerHTML = '';
                    for (const [value, text] of Object.entries(data.main.registerForm.branches)) {
                        const option = document.createElement('option');
                        option.value = value;
                        option.textContent = text;
                        branchSelect.appendChild(option);
                    }
                }
            } 
        })
        .catch(error => console.error('Error loading language file:', error));
}
