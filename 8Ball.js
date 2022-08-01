var eightBall = {
    index: 0,
    advice: ["yes", "no", "maybe", "not a chance"],
    shake: function() {
        this.index = this.index++;
        if (this.index >= this.advice.length) {
            this.index = 0;
        }
    },
    look: function() {
        return this.advice[this.index];
    }
};
eightBall.shake();
eightBall.shake();
console.log(eightBall.look());
console.log(eightBall.look());