const BoardCreation = require("../grid");

describe("Given a board creation function", () => {
  describe("When it's called and it receives one value for the number of rows, 4, and one value for the number of columns, 4", () => {
    test("Then it should return a grid with 4 rows and 4 columns", () => {
      const rowAmount = 2;
      const columnAmount = 2;
      const expectedtotal = new BoardCreation(rowAmount, columnAmount);

      const total = new BoardCreation(rowAmount, columnAmount);

      expect(total).toEqual(expectedtotal);
    });
  });
});
