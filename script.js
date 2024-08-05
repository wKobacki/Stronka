document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('idea-form');
    const ideasList = document.getElementById('ideas-list');
    const formSection = document.getElementById('form-section');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const solution = document.getElementById('solution').value;
        //const department=document.getElementById('department').value;

        const idea = {
            title,
            description,
            solution,
            //department,
            votesFor: 0,
            votesAgainst: 0
        };

        addIdeaToList(idea);
        form.reset();
        formSection.style.display = 'none';
    });
});

function addIdeaToList(idea) {
    const ideaElement = document.createElement('div');
    ideaElement.className = 'idea';
    ideaElement.innerHTML = `
        <h3>${idea.title}</h3>
        <p><strong>Description:</strong> ${idea.description}</p>
        <p><strong>Proposed Solution:</strong> ${idea.solution}</p>
        <button onclick="voteIdea(this, 'for')">Vote For</button>
        <span class="vote-for-count">${idea.votesFor}</span>
        <button onclick="voteIdea(this, 'against')">Vote Against</button>
        <span class="vote-against-count">${idea.votesAgainst}</span>
    `;
    document.getElementById('ideas-list').appendChild(ideaElement);
}

function voteIdea(button, type) {
    const countElement = button.nextElementSibling;
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
