const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // визначення к-сті хотів 2^n - 1, де n - к-сть дисків
  const turns = Math.pow(2, disksNumber) - 1;
  // визначення часу в секундах за формулою turnsNumber / (turnSpeed/3600)
  const seconds = Math.floor((turns / turnsSpeed) * 3600);

  return { turns, seconds };
}

module.exports = {
  calculateHanoi
};
