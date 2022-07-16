const board = [];

const printBoard = (row, colum) => {
  for (let i = 0; i < row; i += 1) {
    const line = [];
    for (let j = 0; j < colum; j += 1) {
      line.push({ coordinates: `${i}, ${j}`, isAlive: false });
    }
    board.push(line);
  }
  return board;
};

console.log(printBoard(3, 3));
