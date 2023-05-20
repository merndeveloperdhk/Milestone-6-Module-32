// Syntactic sugar
class Instructor{
    name;
    designation= 'Web course instructor'
    team = 'Web Team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`Support session will start ${time}`);
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`);
    }
    pubslishResult(date){
        console.log(`Result will be published on ${date}`);
    }
}
const marifa = new Instructor('Marifa', 'Dhaka')
console.log(marifa);
marifa.startSupportSession('11 AM')
marifa.createQuiz('Module 6')
marifa.pubslishResult('25.10.2023');

const misam = new Instructor('Misam', 'Dhaka');
console.log(misam);
misam.createQuiz('module 5')
misam.pubslishResult('02.02.2023')
