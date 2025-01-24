class ProjectView {
    displayProjects(projects) {
        const projectsGrid = document.getElementById('projects-grid');
        projectsGrid.innerHTML = '';

        projects.forEach(project => {
            const projectCard = `
                <div class="col-md-6 mb-4">
                    <div class="card h-100">
                        <img src="${project.imageUrl}" class="card-img-top" alt="${project.title}">
                        <div class="card-body">
                            <h5 class="card-title">${project.title}</h5>
                            <p class="card-text">${project.description}</p>
                            <div class="technologies mb-3">
                                ${project.technologies.map(tech => 
                                    `<span class="badge bg-secondary me-1">${tech}</span>`
                                ).join('')}
                            </div>
                            <div class="d-flex gap-2">
                                ${project.githubUrl ? 
                                    `<a href="${project.githubUrl}" class="btn btn-dark" target="_blank">GitHub</a>` : ''}
                                ${project.liveUrl ? 
                                    `<a href="${project.liveUrl}" class="btn btn-primary" target="_blank">Live Demo</a>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            projectsGrid.insertAdjacentHTML('beforeend', projectCard);
        });
    }
}