// js/script.js
import { setupAuthForms, showLoginForm, showRegisterForm } from './forms/formHandlers.js';
import { setupIdeaForm, setupIdeaList } from './utils/ui.js';
import { addIdeaToList, addIdeaToTable, voteIdea, openModal, closeModal, acceptIdea, rejectIdea } from './ideaList.js';
import { changeLanguage } from './utils/language.js';

function initialize() {
    setupAuthForms(); // For login and registration forms
    setupIdeaForm();  // For idea submission form
    setupIdeaList();  // For displaying and managing ideas
}

initialize();

// Expose functions globally to be used in HTML onclick attributes
window.showLoginForm = showLoginForm;
window.showRegisterForm = showRegisterForm;
window.changeLanguage = changeLanguage;
window.logout = () => {
    localStorage.removeItem('authToken'); // Or sessionStorage if using sessionStorage
    window.location.href = 'login.html';
};
window.showForm = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) formSection.style.display = 'block';
};
window.closeCharts = () => {
    const chartsWindow = document.getElementById('chartsWindow');
    if (chartsWindow) chartsWindow.style.display = 'none';
};
window.sortIdeas = () => {
    const sortOption = document.getElementById('sort-options')?.value;
    const ideasList = Array.from(document.getElementById('ideas-list')?.children || []);

    ideasList.sort((a, b) => {
        const aValue = parseInt(a.querySelector('.vote-count')?.textContent, 10) || 0;
        const bValue = parseInt(b.querySelector('.vote-count')?.textContent, 10) || 0;
        if (sortOption === 'votes') {
            return bValue - aValue;
        } else if (sortOption === 'date') {
            return new Date(b.dataset.date) - new Date(a.dataset.date);
        }
    });

    const ideasContainer = document.getElementById('ideas-list');
    if (ideasContainer) {
        ideasContainer.innerHTML = '';
        ideasList.forEach(idea => ideasContainer.appendChild(idea));
    }
};
window.showAllIdeas = () => {
    const ideas = document.querySelectorAll('.idea');
    ideas.forEach(idea => idea.style.display = 'block');
};
window.showCompletedIdeas = () => {
    const ideas = document.querySelectorAll('.idea');
    ideas.forEach(idea => {
        const status = idea.querySelector('.status')?.textContent;
        idea.style.display = (status === 'Completed') ? 'block' : 'none';
    });
};
window.showRejectedIdeas = () => {
    const ideas = document.querySelectorAll('.idea');
    ideas.forEach(idea => {
        const status = idea.querySelector('.status')?.textContent;
        idea.style.display = (status === 'Rejected') ? 'block' : 'none';
    });
};
window.showInProgresIdeas = () => {
    const ideas = document.querySelectorAll('.idea');
    ideas.forEach(idea => {
        const status = idea.querySelector('.status')?.textContent;
        idea.style.display = (status === 'In Progress') ? 'block' : 'none';
    });
};
window.voteIdea = voteIdea;
window.openModal = openModal;
window.closeModal = closeModal;
window.acceptIdea = acceptIdea;
window.rejectIdea = rejectIdea;

// Expose functions for table and list separately
window.addIdeaToTable = addIdeaToTable; // For stock.html
window.addIdeaToList = addIdeaToList;   // For new.html
