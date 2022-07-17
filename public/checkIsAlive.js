const Bacterium = require("./Bacterium");

let isAlive = true;
const counter = 2;

const killBacteria = () => {
  if ((Bacterium.isAlive && counter === 2) || counter === 3) {
    isAlive = true;
  } else if ((isAlive && counter < 2) || counter > 3) {
    isAlive = false;
  }
  return isAlive;
};

console.log(killBacteria());

const reviveBacteria = () => {
  if (isAlive === false && counter === 3) {
    isAlive = true;
  }
  return isAlive;
};

console.log(reviveBacteria());

exports.module = killBacteria();
exports.module = reviveBacteria;
