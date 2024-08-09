import { setupAuthForms, showLoginForm, showRegisterForm } from './forms/formHandlers.js';
import { setupIdeaForm, setupIdeaList } from './utils/ui.js';
import { addIdeaToList, voteIdea, openModal, closeModal } from './ideaList.js';
import { changeLanguage } from './utils/language.js'; // Dodane importowanie funkcji changeLanguage

function initialize() {
    setupAuthForms(); // For login and registration forms
    setupIdeaForm();  // For idea submission form
    setupIdeaList();  // For displaying and managing ideas
}

initialize();

// Expose functions globally to be used in HTML onclick attributes
window.showLoginForm = showLoginForm;
window.showRegisterForm = showRegisterForm;
window.changeLanguage = changeLanguage; // Dodane przypisanie funkcji changeLanguage
window.logout = () => {
    localStorage.removeItem('authToken'); // Or sessionStorage if using sessionStorage
    window.location.href = 'login.html';
};
window.showForm = () => {
    document.getElementById('form-section').style.display = 'block';
};
window.closeCharts = () => {
    document.getElementById('chartsWindow').style.display = 'none';
};
window.sortIdeas = () => {
    const sortOption = document.getElementById('sort-options').value;
    const ideasList = Array.from(document.getElementById('ideas-list').children);

    ideasList.sort((a, b) => {
        const aValue = a.querySelector('.vote-count').textContent || 0;
        const bValue = b.querySelector('.vote-count').textContent || 0;
        if (sortOption === 'votes') {
            return bValue - aValue;
        } else if (sortOption === 'date') {
            return new Date(b.dataset.date) - new Date(a.dataset.date);
        }
    });

    const ideasContainer = document.getElementById('ideas-list');
    ideasContainer.innerHTML = '';
    ideasList.forEach(idea => ideasContainer.appendChild(idea));
};
window.showAllIdeas = () => {
    const ideas = document.querySelectorAll('.idea');
    ideas.forEach(idea => idea.style.display = 'block');
};
window.showCompletedIdeas = () => {
    const ideas = document.querySelectorAll('.idea');
    ideas.forEach(idea => {
        const status = idea.querySelector('.status').textContent;
        idea.style.display = (status === 'Completed') ? 'block' : 'none';
    });
};
window.showRejectedIdeas = () => {
    const ideas = document.querySelectorAll('.idea');
    ideas.forEach(idea => {
        const status = idea.querySelector('.status').textContent;
        idea.style.display = (status === 'Rejected') ? 'block' : 'none';
    });
};
window.showInProgresIdeas = () => {
    const ideas = document.querySelectorAll('.idea');
    ideas.forEach(idea => {
        const status = idea.querySelector('.status').textContent;
        idea.style.display = (status === 'In Progress') ? 'block' : 'none';
    });
};
window.voteIdea = voteIdea;
window.openModal = openModal;
window.closeModal = closeModal;
