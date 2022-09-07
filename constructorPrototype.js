function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}
Dog.prototype.species = "Canine";
Dog.prototype.bark = function() {
    if (this.weight > 25) {
        console.log(`${this.name} says Woof!`);
    } else {
        console.log(`${this.name} says Yip!`);
    }
};
Dog.prototype.run = function() {
    console.log("Run!");
};
Dog.prototype.wag = function() {
    console.log("Wag!");
};

let fido = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);
// giving Spot a bigger WOOF here, but we don't need it in the final testing, hence the comment
/*spot.bark = function() {
    console.log(`${this.name} says WOOF!`);
}*/

/*fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();*/



// code below created a prototype(showDog) that inherits from another prototype(Dog)

// first, create a Showdog constructor  
function ShowDog(name, breed, weight, handler) {
    // replace the three lines below with Dog.call()
    /*this.name = name;
    this.breed = breed;
    this.weight = weight;*/
    Dog.call(this, name, breed, weight)
    this.handler = handler;
}

// create an empty Dog instance and assign it to the prototype of the ShowDog constructor 
ShowDog.prototype = new Dog();
// we set ShowDog prototype's constructor property to ShowDog(best practice).
// if we don't do this, code still runs properly, but ShowDog prototype's constructor property would retun Dog constructor
ShowDog.prototype.constructor = ShowDog;

// assign the ShowDog properties and methods to the ShowDog prototype
ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack = function() {
    console.log("Stack");
};
ShowDog.prototype.bait = function() {
    console.log("Bait");
};
ShowDog.prototype.gait = function(kind) {
    console.log(`${kind}ing`);
};
ShowDog.prototype.groom = function() {
    console.log("Groom");
};

let scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");

/*scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);*/


// we're trying to test our dogs here. Are our dogs really dogs and our show dogs really show dogs
// let fido = new Dog("Fido", "Mixed", 38); already created Fido before on line 21
if (fido instanceof Dog) {
    console.log("Fido is a Dog");
}
if (fido instanceof ShowDog) {
    console.log("Fido is a ShowDog");
}

// let scotty = new showDog("Scotty", "Scottish Terrier", 15, "Cookie"); already created Scotty on line 68
if (scotty instanceof Dog) {
    console.log("Scotty is a Dog");
}
if (scotty instanceof ShowDog) {
    console.log("Scotty is a ShowDog");
}
console.log(`Fido constructor is ${fido.constructor}`);
console.log(`Scotty constructor is ${scotty.constructor}`);

// running final testing on my dogs and show dogs to make sure they all do the right thing
let beatrice = new ShowDog("Beatrice", "Pomeranian", 5, "Hamilton");
fido.bark();
fluffy.bark();
spot.bark();
scotty.bark();
beatrice.bark();
scotty.gait("Walk");
beatrice.groom();
beatrice.bait();
scotty.run();