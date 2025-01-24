class ProjectController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    initialize() {
        const projects = this.model.getAllProjects();
        this.view.displayProjects(projects);
    }
}