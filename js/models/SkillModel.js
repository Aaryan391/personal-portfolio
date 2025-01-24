class SkillModel {
    constructor() {
        this.skills = {
            frontend: [
                { name: "HTML5", level: 90 },
                { name: "CSS3", level: 85 },
                { name: "JavaScript", level: 80 },
                { name: "Bootstrap", level: 85 }
            ],
            backend: [
                { name: "Node.js", level: 75 },
                { name: "Python", level: 70 },
                { name: "MySQL", level: 75 }
            ],
            tools: [
                { name: "Git", level: 80 },
                { name: "VS Code", level: 90 },
                { name: "Command Line", level: 75 }
            ]
        };
    }

    getAllSkills() {
        return this.skills;
    }

    getSkillsByCategory(category) {
        return this.skills[category] || [];
    }
}