const readline = require('readline')

//implement game called Battleship
//User plays game w/ terminal
//State of game represented by 10x10 Grid Board
    //You can make them flexible.
//Square attack
    //Ship?
        //Hit
    //No ship?
        //Miss
//Displayed
    //Hits
    //Misses
    //Unattacked Squares
    //Attacked ships
//Not displayed
    //Unattacked ships

class HumanPlayer {
    constructor() {
        rl = readline.createInterface(process.stdin, process.stdout);
    }

    getMove(cb) {
        rl.question('Make your move!', (answer) => {
            cb(answer);
            rl.close();
        });
    }
};

//Grid:
//i = row
//j = column
function gridSpace(r, c) {
    let coordinates = [];
    for (let row = 1; row <= 10; row++) {
        if (r === row) {
            coordinates.push(row);
        }
    };
    for (let column = 1; column <= 10; column++) {
        if (c === column) {
            coordinates.push(column)
        }
    }

    return coordinates;
}

class Board {
    constructor (numRows, numCols, numShips, player) {
        this.numRows = numRows; //10
        this.numCols = numCols; //10
        this.numShips = numShips;
        this.player = player;
    }

    createGrid() {
        //"this" makes a variable usable throughout an object.
       this.grid = [];

        for (let row = 1; row <= this.numRows; row++) {
            let xAxis = [];
            for (let column = 1; column <= this.numCols; column++) {
                if (this.numShips > 0) {
                    this.numShips--;
                    xAxis.push("s");
                } else {
                    xAxis.push(null);
                }
            }
            this.grid.push(xAxis);
        }
    }

    gridDisplay() {
        return this.grid;
    }

    shipsRemaining() {
        console.log(`${this.numShips} are remaining`)
    }

    gameStatus() {
        if(this.numShips === 0) {
            console.log(`${this.numShips} remaining, game over!`)
        }
    }
    // if the space has been called upon before is invalid
    // if the space does not exist it is invalid
    inValidMove() {
        // if player input is undefined
    }

    playerInput (array) {
        // a miss is 'x'
        // for loop 
        this.firedUponSpaces();
    }

}
const player1 = new HumanPlayer
const boardGame = new Board(2, 2, 1);
boardGame.createGrid()
console.log(boardGame);

//CB
//Next step after user input is received.
//Next square player wants to attack.


//1st. Player makes move.
//2nd. Hit/Miss?
//3rd. If hit, go again.
    //3.1 If miss, it's now opponent's turn

// HP:
// Ship hitpoints (Denoted by counter)
// counter = however many grid spaces it occupies
// if hit, counter -= 1;
// if counter === 0, ship is DESTROYED!!!

//Ship Placement:
//

module.exports = HumanPlayer
