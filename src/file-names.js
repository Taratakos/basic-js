const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {

  let counter = 0 // ініт лічильника для відстеження номера суффіксу

  // Зовнішній цикл для перебору імен файлів
  for (let i = 0; i <= names.length; i += 1) {
    // внутрішній цикл для порівнянн кожного імені файлу з іншим
    for (let k = 0; k <= names.length; k += 1) {
      // перевірка чи імена відрізняються та чи імена на позиціях i та k однакові
      if (k !== i && names[k] === names[i]) {
        counter = counter + 1;
        // додавання лічильника як суфікса до повторюваного імені
        names[k] = `${names[k]}(${counter})`;
      }
    }
    counter = 0; // скидання лічильника для наступної ітераціїї
  }

  return names
}

module.exports = {
  renameFiles
};
