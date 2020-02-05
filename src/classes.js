export class Goal{
    constructor(user, project, objetivo, name, description, concluded){
        this.user=user;
        this.project=project;
        this.objetivo=objetivo;
        this.name=name;
        this.description=description;
        this.concluded=concluded;
    }
}

export class Objective{
    constructor(user, project, name, description, concluded){
        this.user=user;
        this.project=project;
        this.name=name;
        this.description=description;
        this.concluded=concluded;
    }
}

export class Project{
    constructor(user, name, description, concluded){
        this.user=user;
        this.name=name;
        this.description=description;
        this.concluded=concluded;
    }
}

export class User {
    constructor(name, password){
        this.name=name;
        this.password=password;
        this.projects=[];
    }
}