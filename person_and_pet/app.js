const Person = require('./person');
const Pet = require('./pet');



const scooby = new Pet('Scooby Doo', 'Dog');
const shaggy = new Person('Shaggy Rogers', scooby);
shaggy.greet();

shaggy.feedPet('Scooby snack');

const theCat = new Pet('Kato', 'cat', 2);
const velma = new Person('Velma', theCat);
velma.feedPet('Cat treat');
