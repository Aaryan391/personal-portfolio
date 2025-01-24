class SkillController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    initialize() {
        const skills = this.model.getAllSkills();
        this.view.displaySkills(skills);
    }
}