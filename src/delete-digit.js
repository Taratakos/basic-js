const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  const numberStr = n.toString();
  let maxNumber = 0;

  // ітеруємо кожну позицію цифри
  for (let i = 0; i < numberStr.length; i += 1) {
    // створюємо нове число виключивши цифру на поточній позиції
    const currentNum = parseInt(numberStr.substring(0, i) + numberStr.substring(i + 1));
    // оновлюємо максимальний результат, якщо поточне число більше
    maxNumber = Math.max(maxNumber, currentNum)
  }
  // повертаємо мкс. число, отримане вилученням рівно однієї цифри
  return maxNumber;
}

module.exports = {
  deleteDigit
};
