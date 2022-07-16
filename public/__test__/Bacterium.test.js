const Bacterium = require("../Bacterium");

describe("Given a class bacterium", () => {
  describe("When it's called and it receives a value 'true'", () => {
    test("Then it should return an object with un undefined positionY and positionX and isAlive property true, despite its default value is false", () => {
      const isAlive = true;
      const expectedtotal = {
        positionY: undefined,
        positionX: undefined,
        isAlive: true,
      };

      const total = new Bacterium(isAlive);

      expect(total).toEqual(expectedtotal);
    });
  });
});
