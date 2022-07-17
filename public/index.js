const BoardCreation = require("./BoardCreation");
const Bacterium = require("./Bacterium");

const grid = new BoardCreation(2, 2).createBoard();

const bacteriaTest = new Bacterium();

console.log(grid);
console.log(bacteriaTest);
