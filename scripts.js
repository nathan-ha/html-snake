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
                new_tail = new Body_Part(old_tail.x + 1, old_tail.y, LEFT);
                break;
            case RIGHT:
                new_tail = new Body_Part(old_tail.x - 1, old_tail.y, RIGHT);
                break;
            case UP:
                new_tail = new Body_Part(old_tail.x, old_tail.y + 1, UP);
                break;
            case DOWN:
                new_tail = new Body_Part(old_tail.x, old_tail.y - 1, DOWN);
                break;
        }
        this.body.push(new_tail);
    }
    function move(direction) {
        for (let i = this.body.length - 1; i >= 1; i--) {
            let curr = this.body[i];
            let next = this.body[i - 1];
            curr.x = next.x;
            curr.y = next.y;
            curr.direction = next.direction;
        }
        let head = this.body[0];
        switch (head.direction) {
            case UP:
                head.y--;
                break;
            case DOWN:
                head.y++;
                break;
            case LEFT:
                head.x--;
                break;
            case RIGHT:
                head.x++;
                break;
        }
        // TODO: the bounds are currently in pixels when they probably shouldn't be
        if (head.x < 0 || head.x > SCREEN_WIDTH || head.y < 0 || head.y > SCREEN_HEIGHT) {
            throw new Error("Snake went out of bounds! Finish handling this!");
        }
    }
}

// initializes the screen and starting positions
function init() {
    let snake = new Snake();
    // TODO: draw canvas
    // TODO: draw snake
    // TODO: draw apple
    // TODO: draw score
}

// generates a random integer inclusive
function random_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
