var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .25, .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29];
var highScore = 0;

// function to print scores to the console
function printScores(scoreArray) {
    var output;
    
    for (var i = 0; i < scores.length; i++) {
        output = "Bubble solution #" + i + " score: " + scores[i];
        console.log(output);
    }
}
var scoreList = printScores(scores);

// function to get the highest score in the list
function getHighScore(scoreArray) {
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}
var printHighScore = getHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

// function to get the solutions with the highest score
// and as well as find the most cost effective solution, giving us the overall best solution
function getBestResults(highScore) {
    var bestSolutions = [];
    var cost = 100;
    var index;
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore /*&& cost > costs[i]*/) {
            bestSolutions.push(i);
            // doesn't include the second solution with highscoreindex = i;
            //cost = costs[i];
        }
    }
    return bestSolutions;
    //return index;
}
var getBestSolution = getBestResults(highScore);
console.log("Solutions with highest score: " + getBestSolution);

// function to get the most cost effective solution
function getMostCostEffectiveSolution(score, cost, highScore) {
    var cost = 100;
    var index;
    for (var i = 0; i < scores.length; i++) {
        if (score[i] == highScore && cost > costs[i]) {
            index = i;
            cost = costs[i];
        }
    }
    return index;
}
var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
//var mostCostEffective = getBestResults(highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective.");
//var trial = getBestResults(highScore);
//console.log(trial);