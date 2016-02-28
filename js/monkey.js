function Monkey(initialName, species){
    this.name = initialName;
    this.species = species;
    this.foodsEaten = [];
}

Monkey.prototype.eat = function(food){
    this.foodsEaten.push(food);
};
Monkey.prototype.introduce = function(){
    return "Hello my name is " + this.name + ", " + "I'm a "+ this.species + " and I've eaten a " + this.foodsEaten[this.foodsEaten.length-1];
};

var carl = new Monkey("Carl", "Orangutan");
var amy = new Monkey("Amy", "Gorilla");

function Dog(initialName, species){
    this.name = initialName;
    this.species = species;
    this.foodsEaten = [];
    this.toys = ["ball","chewy thing", "bone"];
}

Dog.prototype.play = function(){
    var i = (Math.floor(Math.random() * 3));
    console.log("I love to play with a " + this.toys[i]);
};

Dog.prototype = new Monkey();
