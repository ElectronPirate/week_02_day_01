const River = function (name, fish){
  this.name = name;
  this.fish = fish;
}

River.prototype.fishCount = function () {
  return this.fish.length;
};

River.prototype.loseFish = function (fish) {
  for (var i = 0; i < this.fish.length; i++) {
    if (this.fish[i] == fish) {
      return this.fish.splice(i, 1);
    }
  }
};

module.exports = River;
