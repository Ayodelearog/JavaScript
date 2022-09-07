var passengers = [{name: "Jane Doloop", paid: true, ticket: "coach"}, 
{name: "Dr. Evel", paid: true, ticket: "firstclass"}, 
{name: "Sue Property", paid: false, ticket: "premium"}, 
{name: "John Funcall", paid: true, ticket: "true"}];

function processPassengers(passengers, testFunction) {
    for (let i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

function checkNoFlyList(passenger) {
    if (passenger.name === "Dr. Evel") {
        return true;
    }
    return false;
}

function checkNotPaid (passenger) {
    if (!passenger.paid) {
        return true;
    }
    return false;
}

function printPassenger(passenger) {
    passenger.paid ? console.log(`${passenger.name} has paid.`) : console.log(`${passenger.name} has not paid.`);
}

function createDrinkOrder(passenger) {
    let orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            alert("Would you like a cocktail or wine?");
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function() {
            alert("Your choice is wine, cola or water.")
        };
    } else {
        orderFunction = function() {
            alert("Your choice is cola or water.")
        };
    }
    return orderFunction;
}

function createDinnerOrder (passenger) {
    let orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            alert("We have chicken and pasta on the menu. Which would you prefer?")
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function() {
            alert("Would you like a snack box or cheese?")
        };
    } else {
        orderFunction = function() {
            alert("Your choice is peanuts or pretzels.")
        };
    }
    return orderFunction;
}

function serveCustomer(passenger) {
    let getDrinkOrderFunction = createDrinkOrder(passenger);
    getDrinkOrderFunction();
    // get dinner order;
    let getDinnerOrderFunction = createDinnerOrder(passenger);
    getDinnerOrderFunction();
    getDinnerOrderFunction();
    
    getDrinkOrderFunction();
    getDrinkOrderFunction();
    // show movie
    getDrinkOrderFunction();
    // pick up trash
}

function servePassengers(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

servePassengers(passengers);


let allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log("The plane can't take off: we have a passenger on the no-fly-list.")
}

let allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid.");
}

let allHasPaid = processPassengers(passengers, printPassenger);