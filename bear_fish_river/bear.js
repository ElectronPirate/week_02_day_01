const Bear = function(name, food){
  this.name = name;
  this.stomach = [];
}

Bear.prototype.roar = function () {
  return 'ROAR!';
};

Bear.prototype.foodCount = function () {
  return this.stomach.length;
};

Bear.prototype.takeFish = function (food) {
  this.stomach.push(food);
  
};


module.exports = Bear;
