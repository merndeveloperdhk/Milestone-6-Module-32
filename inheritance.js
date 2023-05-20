class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location
    }
}
// Syntactic sugar
class Instructor extends TeamMember{
    designation= 'Web course instructor'
    team = 'Web Team'
    tech;
    constructor(name, location, tech){
        super(name, location)
        this.tech = tech
    }
    startSupportSession(time){
        console.log(`Support session will start ${time}`);
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`);
    }
  
}
// Syntactic sugar
class Developer extends TeamMember{
    designation= 'Web course instructor'
    team = 'Web Team'
    tech;
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech
    }
    developerFeatures(features){
        console.log(`Please develop the  ${features}`);
    }
    release(version){
        console.log(`Please release the version  ${version}`);
    }
  
}

const misam = new Developer('Misam', 'Dhaka', 'React')
console.log(misam);
const marifa = new Instructor('marifa', 'Canada', 'English')
console.log(marifa);

