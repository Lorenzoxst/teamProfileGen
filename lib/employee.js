class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(`The employees name is ${this.name}`);
    }

    getID() {
        console.log(`${this.name}s' id is ${this.id}`);
    }

    getEmail() {
        console.log(`${this.name}s' email is ${this.email}`);
    }

    getRole() {
        let role = `Employee`;
        return role;
    }
}
module.exports = Employee;