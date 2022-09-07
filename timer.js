// creating a timeout loop

// after timeHandler function is called, it alert a message and then
// calls setTime function
function timerHandler() {
    alert("What are you doing just sitting there staring at a blank page!?");
    setTime();
}

// setTime function in turn calls setTimeout function which waits 5 seconds
// before it calls timeHandler function
function setTime() {
    setTimeout(timerHandler, 5000);
}

// This line of code calls the setTime function
setTime();