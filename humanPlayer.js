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
//const rl = readline.createInterface(process.stdin, process.stdout);
//rl.question('Make your move!', (answer) => {

// });

class HumanPlayer {
    constructor() {
        this.rl = readline.createInterface(process.stdin, process.stdout);
        this.rl.question('Make your move!', (answer) => {
            console.log(answer);
            
        });
    }
    
    getMove(cb) {

    }

};

module.exports = HumanPlayer

