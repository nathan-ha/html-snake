const SCREEN_HEIGHT = 1600;
const SCREEN_WIDTH = 800;

const UP = 1;
const DOWN = -1;
const RIGHT = 3;
const LEFT = -3;

class Snake {
    class Body_Part {
        constructor(x, y, direction) {
            this.x = x;
            this.y = y;
            this.direction = direction
        }
    }
    constructor() {
        let x = SCREEN_WIDTH / 2;
        let y = SCREEN_HEIGHT / 2;
        this.body = [new Body_Part(x, y, LEFT)];
    }
    function grow() {
        let old_tail = this.body[this.body.length - 1];
        let new_tail;

        switch (old_tail.direction) {
            case LEFT:
                new_tail = new Body_Part(old_tail.x + 1, old_tail.y, LEFT)
                break;
            //TODO: finish other cases
        
            default:
                break;
        }
    }
    function move(direction) {

    }
}

// initializes the screen and starting positions
function init() {

}

// generates a random integer inclusive
function random_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
