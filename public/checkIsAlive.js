let isAlive = true;
const counter = 3;

const stillAliveBacteria = () => {
  if ((isAlive && counter === 2) || counter === 3) {
    isAlive = true;
  } else if ((isAlive && counter < 2) || counter > 3) {
    isAlive = false;
  }
  return isAlive;
};

console.log(stillAliveBacteria());

const reviveBacteria = () => {
  if (isAlive === false && counter === 3) {
    isAlive = true;
  }
  return isAlive;
};

console.log(reviveBacteria());
