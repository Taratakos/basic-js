const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // ініт змінну для вістеження загальної суми
  let sum = 0;
  // Вкладені цикли для переробору кожного елемента в матриці
  for (let i = 0; i < matrix.length; i += 1) {
    for (let k = 0; k < matrix[i].length; k += 1) {
      // перевірка чи поточний ел не знаходиться під 0, перевіривши, чи він у першому рядку
      // або чи елемент у рядку вище не дорівнює 0 
      if (i === 0 || matrix[i - 1][k] !== 0) {
        sum += matrix[i][k];
      }
    }
  }

  return sum
}

module.exports = {
  getMatrixElementsSum
};
