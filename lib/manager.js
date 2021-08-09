const Employee = require(`./employee`)

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber
    }

    getRole() {
        let role = `Manager`;
        return role;
    }
}