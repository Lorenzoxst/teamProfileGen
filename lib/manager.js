const Employee = require(`./employee`);

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        let role = `${this.name} is the Manager.`;
        return role;
    }
}