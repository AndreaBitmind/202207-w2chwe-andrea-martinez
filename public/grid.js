const Bacterium = require("./Bacterium");

class BoardCreation {
  rowAmount;
  columnAmount;
  cells;

  constructor(rowAmount, columnAmount) {
    this.rowAmount = rowAmount;
    this.columnAmount = columnAmount;
    this.cells = this.createBoard();
  }

  createBoard() {
    const cells = new Array(this.columnAmount).fill(
      new Array(this.rowAmount).fill(new Bacterium())
    );
    return cells;
  }
}

module.exports = BoardCreation;
