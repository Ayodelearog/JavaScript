/*String.prototype.cliche = function() {
    let cliche = ["lock and load", "touch base", "open the kimono"];

    for (let i = 0; i < cliche.length; i++) {
        let index = this.indexOf(cliche[i]);
        if (index >= 0) {
            return true;
        }
    }
    return false;
};

let sentences = ["I'll send my car around to pick you up.", "Let's touch base in the morning and see where we are.", "We don't want to open the kimono, we just want to inform them."];

for (let i = 0; i < sentences.length; i++) {
    let phrase = sentences[i];
    if (phrase.cliche()) {
        console.log("CLICHE ALERT: " + phrase);
    }
};*/


// a method that returns true if a string reads the same forwards and backwords
String.prototype.palindrome = function() {
    let len = this.length-1;

    for (let i = 0; i < len; i++) {
        if (this[i] === this[len-i]) {
            console.log(this[len-i]);
            return true;
        }
        return false;
    }
};
let palWord = "";
if (palWord.palindrome()) {
    console.log("pal detected");
} else {
    console.log("no pal");
};


/*let aString = "nun";
aString.palindrome()
console.log(aString);*/