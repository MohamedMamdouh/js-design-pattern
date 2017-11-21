class extendedFunctions {
    constructor(){
    }
    
    save () {
        console.log('Task '  + this.name + ' has been saved !!');
    }

    complete() {
        this.completed = true;
        console.log(this.name + ' completed');
    }
}

class Task extends extendedFunctions {
    constructor(name){

         super(); //to access and call functions on an object's parent
         this.completed = false;
         this.name = name;
    }    

}


let task1 = new Task('Create a demo for constructors');
let task2 = new Task('Create a demo for Modules');
let task3 = new Task('Create a demo for singleton');
let task4 = new Task('Create a demo for prototypes');

task1.complete();
task1.save();
task2.save();
task3.save();
task4.save();