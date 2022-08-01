// generate random location
var randomLoc = Math.floor(Math.random() * 5);

// ship location
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

// user's current guess
var guess;

// number of hits
var hits = 0;

// number of guesses
var guesses = 0;

// checking if ship is sunk
var isSunk = false;

// creating the logic
while (isSunk == false) {
    guess = prompt("input a valid location between 0 and 6!:");
    if (guess < 0 || guess > 6) {
        alert("Enter a valid number between 0 and 6");
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        }
        else {
            alert("MISS");
        }
    }
}
var stats = `You took ${guesses} guesses to sink the battleship, which means your shooting accuracy was ${3 / guesses}`;
alert(stats);
