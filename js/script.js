document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('idea-form');
    const ideasList = document.getElementById('ideas-list');
    const formSection = document.getElementById('form-section');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const solution = document.getElementById('solution').value;
        const department = document.getElementById('department').value;
        const images = [
            document.getElementById('image1').files[0],
            document.getElementById('image2').files[0],
            document.getElementById('image3').files[0]
        ];

        const readerPromises = images.map(imageFile => {
            return new Promise((resolve) => {
                if (imageFile) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        resolve(e.target.result);
                    };
                    reader.readAsDataURL(imageFile);
                } else {
                    resolve(null);
                }
            });
        });

        Promise.all(readerPromises).then((imageResults) => {
            const idea = {
                title,
                description,
                solution,
                department,
                images: imageResults,
                votes: 0,
                status: 'Voting'
            };

            addIdeaToList(idea);
            form.reset();
            formSection.style.display = 'none';
        });
    });
});

function addIdeaToList(idea) {
    const ideaElement = document.createElement('div');
    ideaElement.className = 'idea';
    ideaElement.innerHTML = `
        <span class="status ${getStatusClass(idea.status)}">${idea.status}</span>
        <h3>${idea.title}</h3>
        <p><strong>Department:</strong> ${idea.department}</p>
        <p><strong>Description:</strong> ${idea.description}</p>
        <p><strong>Proposed Solution:</strong> ${idea.solution}</p>
        <div class="attachments">
            ${idea.images.filter(image => image !== null).map((image, index) => 
                `<img src="${image}" alt="Idea Image" class="thumbnail" onclick="openModal('${image}')">`
            ).join('')}
        </div>
        <div class="vote-buttons">
            <button onclick="voteIdea(this)">Vote</button>
            <span class="vote-count">${idea.votes}</span>
        </div>
    `;
    document.getElementById('ideas-list').appendChild(ideaElement);
}

function voteIdea(button) {
    const ideaElement = button.closest('.idea');
    const countElement = ideaElement.querySelector('.vote-count');
    let voteCount = parseInt(countElement.textContent);
    voteCount++;
    countElement.textContent = voteCount;
}

function showForm() {
    document.getElementById('form-section').style.display = 'block';
}

function closeCharts() {
    document.getElementById('chartsWindow').style.display = 'none';
}

function openModal(imageSrc) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <img src="${imageSrc}" alt="Full Size Image">
        <button class="close" onclick="closeModal()">X</button>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        document.body.removeChild(modal);
    }
}

function getStatusClass(status) {
    switch(status) {
        case 'Voting':
            return 'status-voting';
        case 'In Progress':
            return 'status-in-progress';
        case 'Completed':
            return 'status-completed';
        case 'Rejected':
            return 'status-rejected';
        default:
            return '';
    }
}

function logout() {
    // Remove token from localStorage or sessionStorage
    localStorage.removeItem('authToken'); // If using localStorage
    // sessionStorage.removeItem('authToken'); // If using sessionStorage

    // Redirect to login page
    window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailOrPhone = document.getElementById('emailOrPhone').value;
        const password = document.getElementById('password').value;

        // Here you would typically send a request to your server to validate the user
        console.log('Login with:', emailOrPhone, password);
        
        // Redirect to departments page after successful login
        window.location.href = 'departments.html';
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newEmail = document.getElementById('newEmail').value;
        const newPhone = document.getElementById('newPhone').value;
        const newPassword = document.getElementById('newPassword').value;

        // Here you would typically send a request to your server to create the user
        console.log('Register with:', newEmail, newPhone, newPassword);
        
        // Switch to login form after successful registration
        showLoginForm();
    });
});

function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

function changeLanguage(languageCode) {
    // Function to change language
    console.log('Switching to language:', languageCode);
    // Example of redirecting to a page in the selected language
    // window.location.href = languageCode + '.html';
}
