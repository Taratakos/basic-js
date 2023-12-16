const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // Змінна в якій зберігатимемо к-сть котів
  let catCount = 0;

  // Ітеруємо кожен масив
  for (let i = 0; i < matrix.length; i += 1) {
    // Ітеруємо кожен елемент масиву
    for (let j = 0; j < matrix[i].length; j += 1) {
      // перевіряємо чи елемент рівний '^^'
      if (matrix[i][j] === '^^') {
        // якщо це так, збільшуємо лічильник на одиницю
        catCount += 1;
      }
    }
  }

  // повертаємо загальну к-сть одиниць
  return catCount;
}

module.exports = {
  countCats
};
