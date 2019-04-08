const Pet = function(name, species, hungerLevel = 10){
this.name = name;
this.species = species;
this.hungerLevel = hungerLevel;
}
Pet.prototype.eatFood = function(food){
  if(this.hungerLevel >= 5){
  console.log(`${this.name} ate ${food}`);
}else {
  console.log(`${this.name} is not hungry`);
}
};



module.exports = Pet;
