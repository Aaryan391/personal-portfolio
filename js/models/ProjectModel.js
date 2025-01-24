class ProjectModel {
    constructor() {
        this.projects = [
            {
                id: 1,
                title: "E-Commerce Website",
                description: "A full-stack e-commerce platform built with Node.js and MySQL",
                technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
                imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c",
                githubUrl: "#",
                liveUrl: "#"
            },
            {
                id: 2,
                title: "Task Management App",
                description: "A responsive task management application with local storage",
                technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
                imageUrl: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91",
                githubUrl: "#",
                liveUrl: "#"
            }
        ];
    }

    getAllProjects() {
        return this.projects;
    }

    getProjectById(id) {
        return this.projects.find(project => project.id === id);
    }
}