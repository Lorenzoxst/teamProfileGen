const Employee = require(`./employee`)

class Engineer extends Employee {
    constructor(name, id , email, githubUsername) {
        super(name, id, email);
        this.githubUsername = githubUsername;
    }

    getGithub(){
        let githubLink = `https://github.com/${this.githubUsername}`;
        return githubLink;
    }

    getRole() {
        let role = `Engineer`;
        return role;
    }
}