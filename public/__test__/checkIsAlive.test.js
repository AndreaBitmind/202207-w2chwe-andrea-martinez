/* const killBacteria = require("../checkIsAlive");
 */ /* const reviveBacteria = require("../checkIsAlive"); */

describe("Given a comparative function", () => {
  describe("When it's called and it receives a counter on number 2 and the bacterium is alive (true)", () => {
    test("Then it should return the value 'true", () => {
      let isAlive = true;
      const counter = 2;
      const expectedtotal = true;

      const killBacteria = () => {
        if ((isAlive && counter === 2) || counter === 3) {
          isAlive = true;
        } else if ((isAlive && counter < 2) || counter > 3) {
          isAlive = false;
        }
        return isAlive;
      };
      const total = killBacteria();
      expect(total).toStrictEqual(expectedtotal);
    });
  });
});
