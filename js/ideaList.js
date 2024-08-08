// /js/ideaList.js

export function addIdeaToList(idea) {
    const ideaElement = document.createElement('div');
    ideaElement.className = 'idea';
    ideaElement.innerHTML = `
        <span class="status ${getStatusClass(idea.status)}">${idea.status}</span>
        <h3>${idea.title}</h3>
        <p><strong>Department:</strong> ${idea.department}</p>
        <p><strong>Description:</strong> ${idea.description}</p>
        <p><strong>Proposed Solution:</strong> ${idea.solution}</p>
        <div class="attachments">
            ${idea.images.filter(image => image !== null).map((image) => 
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

export function voteIdea(button) {
    const ideaElement = button.closest('.idea');
    const countElement = ideaElement.querySelector('.vote-count');
    let voteCount = parseInt(countElement.textContent);
    voteCount++;
    countElement.textContent = voteCount;
}

export function openModal(imageSrc) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <img src="${imageSrc}" alt="Full Size Image">
        <button class="close" onclick="closeModal()">X</button>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

export function closeModal() {
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
