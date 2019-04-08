const Person = function(name, pet){
this.name = name;
this.pet = pet;
}

Person.prototype.greet = function(){
console.log(`Hi my name is ${this.name} `);
}

Person.prototype.feedPet = function(food){
this.pet.eatFood(food);
}

module.exports = Person;

// Person.prototype.greet = function {}      prototype object
