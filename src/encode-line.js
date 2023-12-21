const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // if (typeof str !== 'string') {
  //   throw new Error('Input must be a string');
  // }

  let resultStr = '';
  let count = 1; // лічильник підрахунку послідовних входжень одного і того ж сиволу
  let currentChar = str[0];

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      count += 1; // збільшення лічильника якщо поточний симол рівний наступному
    } else {
      resultStr += (count > 1 ? count : '') + str[i]; // Додавання лічильника і символу до результату, з урахуванням випадку, коли лічильник більше 1.
      count = 1; // скидання лічильника для наступного символу
    }
  }

  return resultStr;
}

module.exports = {
  encodeLine
};
