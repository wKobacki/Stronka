// js/utils/ui.js
import { addIdeaToList } from '../ideaList.js';

export function setupIdeaForm() {
    const form = document.getElementById('idea-form');
    if (!form) {
        console.error('Idea form not found');
        return;
    }

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
                status: 'Voting',
                date: new Date() // Add a date attribute for sorting
            };

            addIdeaToList(idea);
            form.reset();
            const formSection = document.getElementById('form-section');
            if (formSection) formSection.style.display = 'none';
        });
    });
}

export function setupIdeaList() {
    // Initialize the idea list or other relevant setup here
    console.log('Idea list setup');
}