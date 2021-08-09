const Employee = require(`./employee`);

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        let edu = `${this.name} goes to ${this.school}.`;
    }

    getRole() {
        let role = `${this.name} is an Intern.`;
        return role;
    }
}