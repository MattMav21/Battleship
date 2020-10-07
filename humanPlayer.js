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

const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout);

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

console.log(gridSpace(3, 8));

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

module.exports = HumanPlayer