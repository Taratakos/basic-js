const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // розібємо вхідні рядки на масиви символів, порожній рядок використаємо як роздільник
  // .sort() - сортуємо масиви в алфавітному порядку
  const arr1 = s1.split('').sort();
  const arr2 = s2.split('').sort();
  //  Застосуємо цикл for of для підрахунку спільних символів
  let index = 0; // ініціалізуємо змінну для вістеження позиції в arr2 під час ітерації
  let count = 0; // ініціалізуємо змінну для збереження кількості спільних символів
  // ітеруємо кожен символ в відсортованому масиві arr1
  for (symbol of arr1) {
    // перевіряємо чи поточний символ symbol в arr1 присутній в arr2, починаючи з index
    if (arr2.indexOf(symbol, index) !== -1) {
      // якщо true - це означає знаходження спільного символа
      count += 1; // збільшуємо змінну
      // оновлюємо index на наступну позицію в arr2, щоб уникнути подвійного підрахунку одного й того ж символу.
      index = arr2.indexOf(symbol) + 1;
    }

  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
