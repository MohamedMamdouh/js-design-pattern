var Task = function(name){
    this.name = name; 
    this.completed = false; 

    this.complete = function(){
        this.completed = true;
        console.log(this.name + ' completed');
    }

    this.save = function(){
        console.log('Task '  + this.name + ' has been saved !!');
    }
}

Task.prototype.complete = function(){
    this.completed = true;
    console.log(this.name + ' completed');
}

Task.prototype.save = function(){
    console.log('Task '  + this.name + ' has been saved !!');
}

var task1 = new Task('Create a demo for constructors');
var task2 = new Task('Create a demo for Modules');
var task3 = new Task('Create a demo for singleton');
var task4 = new Task('Create a demo for prototypes');

task1.complete();
task1.save();
task2.save();
task3.save();
task4.save();