class BoardCreation {
  isAlive = false;
  rowAmount;
  columnAmount;
  board = [];

  constructor(rowAmount, columnAmount) {
    this.rowAmount = rowAmount;
    this.columnAmount = columnAmount;
  }

  createBoard = () => {
    for (let i = 0; i < this.rowAmount; i += 1) {
      const line = [];
      for (let j = 0; j < this.columnAmount; j += 1) {
        line.push({ coordinates: `${i}, ${j}`, isAlive: false });
      }
      this.board.push(line);
    }
    return this.board;
  };
}

module.exports = BoardCreation;
