const BoardCreation = require("./BoardCreation");

const gridprueba = new BoardCreation(3, 3).createBoard();

let counter = 0;

const createCounter = () => {
  for (let row = 0; row < gridprueba.length; row += 1) {
    for (let element = 0; element < gridprueba.length; element += 1) {
      if (gridprueba[row][element] === undefined) {
        counter += 0;
      } else if (gridprueba[row][element].isAlive === false) {
        counter += 1;
      }
    }
  }

  return counter;
};

console.log(createCounter());
