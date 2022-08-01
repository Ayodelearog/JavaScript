function magicGuessMachine() {
    var guess = alert("Pick a random positive number in your mind");
    var numToAdd = [5, 8, 14, 19, 23, 30, 35, 2, 16, 25, 40, 22, 15];
    var num1 = numToAdd[Math.floor(Math.random() * numToAdd.length)];
    alert("Add " + num1);
    var num2 = numToAdd[Math.floor(Math.random() * numToAdd.length)];
    alert("Add " + num2);
    var num3 = numToAdd[Math.floor(Math.random() * numToAdd.length)];
    alert("Add " + num3);
    var realGuess = num1 + num2 + num3;
    alert("Subtract your initial guess.")
    return realGuess;
}

var total = magicGuessMachine();
alert("The answer is " + total);