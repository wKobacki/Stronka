export function addIdeaToTable(idea) {
    const ideasList = document.getElementById('ideas-table').querySelector('tbody');
    if (!ideasList) return;
    
    const row = document.createElement('tr');
    row.dataset.id = idea.id;
    row.innerHTML = `
        <td>${idea.title}</td>
        <td>${idea.description}</td>
        <td>${idea.solution}</td>
        <td>
            <button onclick="acceptIdea(${idea.id})">Accept</button>
            <button onclick="rejectIdea(${idea.id})">Reject</button>
        </td>
    `;
    ideasList.appendChild(row);
}

export function addIdeaToList(idea) {
    const ideasList = document.getElementById('ideas-list');
    if (!ideasList) return;
    
    const ideaElement = document.createElement('div');
    ideaElement.className = 'idea';
    ideaElement.innerHTML = `
        <span class="status ${getStatusClass(idea.status)}">${idea.status}</span>
        <h3>${idea.title}</h3>
        <p><strong>Department:</strong> ${idea.department}</p>
        <p><strong>Description:</strong> ${idea.description}</p>
        <p><strong>Proposed Solution:</strong> ${idea.solution}</p>
        <div class="attachments">
            ${idea.images.filter(image => image).map(image => 
                `<img src="${image}" alt="Idea Image" class="thumbnail" onclick="openModal('${image}')">`
            ).join('')}
        </div>
        <div class="vote-buttons">
            <button onclick="voteIdea(this)">Vote</button>
            <span class="vote-count">${idea.votes}</span>
        </div>
    `;
    ideasList.appendChild(ideaElement);
}

export function voteIdea(button) {
    const voteCountElement = button.nextElementSibling;
    let votes = parseInt(voteCountElement.textContent, 10);
    votes += 1;
    voteCountElement.textContent = votes;
}

export function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImage = modal.querySelector('img');
    modalImage.src = imageSrc;
    modal.style.display = 'block';
}

export function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

export function acceptIdea(id) {
    console.log('Idea accepted:', id);
}

export function rejectIdea(id) {
    console.log('Idea rejected:', id);
}

function getStatusClass(status) {
    switch (status) {
        case 'Completed': return 'completed';
        case 'Rejected': return 'rejected';
        case 'In Progress': return 'in-progress';
        default: return '';
    }
}
