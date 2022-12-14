// this part is for the Robot constructor
function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}
Robot.prototype.maker = "ObjectRUs";
Robot.prototype.speak = function() {
    console.log("Speaking!");
};
Robot.prototype.makeCoffee = function() {
    console.log(`${this.name} is making coffee now`);
};
Robot.prototype.blinkLights = function() {
    console.log("Blinking lights");
};

let robby = new Robot("Robby", 1956, "Dr. Morbius");
let rosie = new Robot("Rosie", 1962, "George Jetson");

robby.onOffSwitch = true;
robby.makeCoffee = function() {
    console.log(`${this.name} is going to StarBucks to get coffee.`);
}
rosie.cleanHouse = function() {
    console.log(`${this.name} is cleaning the house.`);
};

/*console.log(`${robby.name} was made by ${robby.maker} in ${robby.year} and is owned by ${robby.owner}`);
robby.makeCoffee();
robby.blinkLights();

console.log(`${rosie.name} was made by ${rosie.maker} in ${rosie.year} and is ownerd by ${rosie.owner}`);
rosie.cleanHouse();*/


// create the SpaceRobot constructor
function SpaceRobot(name, year, owner, homePlanet) {
    this.name = name;
    this.year = year;
    this.owner = owner;
    this.homePlanet = homePlanet;
}

// create a new roboy using the Robot constructor and assign it to the prototype of the SpaceRobot constructor
SpaceRobot.prototype = new Robot;

// assign the methods and properties to the SpaceRobot prototype
SpaceRobot.prototype.speak = function() {
    alert(`${this.name} says Sir, If I may venture an opinion...`);
};
SpaceRobot.prototype.pilot = function() {
    alert(`${this.name} says Thrusters? Are they important?`);
};

let c3po = new SpaceRobot("C3PO", 1977, "Luke Skywalker", "Tatooine");
c3po.speak();
c3po.pilot();
console.log(`${c3po.name} was made by ${c3po.maker}`);

let simon = new SpaceRobot("Simon", 2009, "Carla Diana", "Earth");
simon.makeCoffee();
simon.blinkLights();
simon.speak();