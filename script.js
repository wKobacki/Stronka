document.getElementById('idea-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;

    const idea = { title, description, category };

    addIdeaToList(idea);
    hideForm();
});

function showForm() {
    document.getElementById('form-section').style.display = 'block';
}

function hideForm() {
    document.getElementById('form-section').style.display = 'none';
}

function addIdeaToList(idea) {
    const ideaElement = document.createElement('div');
    ideaElement.className = 'idea';
    ideaElement.innerHTML = `
        <h3>${idea.title}</h3>
        <p>${idea.description}</p>
        <p><strong>Category:</strong> ${idea.category}</p>
        <button onclick="upvoteIdea(this)">Upvote</button>
        <span class="vote-count">0</span>
    `;
    document.getElementById('ideas-list').appendChild(ideaElement);
}

function upvoteIdea(button) {
    const voteCountElement = button.nextElementSibling;
    let voteCount = parseInt(voteCountElement.textContent);
    voteCount++;
    voteCountElement.textContent = voteCount;
}
