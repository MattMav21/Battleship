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
};

//Grid:
//i = row
//j = column

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
        console.log("This move is invalid!")
    }

    playerInput(coordinates) {
        let destroyed = 'x';
        let miss = 'm';
        for (let outer = 0; outer < this.grid.length; outer++) {
            let subGrid = this.grid[outer];
            for (let inner = 0; inner < subGrid.length; inner++) {
                let space = subGrid[inner];
                if (space === 's') {
                    space = destroyed;
                    this.numShips--;
                } else {
                    space = miss;
                }
            }
        }
        this.gridDisplay();
        this.shipsRemaining();
        this.gameStatus();
    }

    grabCoordinates(r, c) {
        console.log("Make your move!")
        // rl.question('Enter row', (r) => {
        //     cb(answer);
        //     rl.close();
        // });


        let coordinates = [];

        for (let row = 1; row <= this.numRows; row++) {
            if (r === row) {
                coordinates.push(row);
            } else {
                this.inValidMove();
            }
        };
        for (let column = 1; column <= this.numCols; column++) {
            if (c === column) {
                coordinates.push(column)
            } else {
                this.inValidMove();
            }
        }
        playerInput(coordinates);
    }

}

//const player1 = new HumanPlayer
const boardGame = new Board(3, 3, 1);
boardGame.createGrid()
boardGame.playerInput([1, 2]);


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
