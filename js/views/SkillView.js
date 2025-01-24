class SkillView {
    displaySkills(skills) {
        const skillsContent = document.getElementById('skills-content');
        skillsContent.innerHTML = '';

        const categories = Object.keys(skills);
        categories.forEach(category => {
            const categorySection = `
                <div class="mb-5">
                    <h3 class="text-capitalize mb-4">${category} Skills</h3>
                    <div class="row">
                        ${skills[category].map(skill => `
                            <div class="col-md-6 mb-3">
                                <div class="skill-item">
                                    <div class="d-flex justify-content-between mb-1">
                                        <span class="fw-bold">${skill.name}</span>
                                        <span>${skill.level}%</span>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" 
                                             style="width: ${skill.level}%" 
                                             aria-valuenow="${skill.level}" 
                                             aria-valuemin="0" 
                                             aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            skillsContent.insertAdjacentHTML('beforeend', categorySection);
        });
    }
}