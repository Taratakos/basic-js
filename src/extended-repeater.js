const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // Переврка чи параметр options передайний ф-ї, якщо ні або прсвоєне йому значення є fasle (null/undefined, тоді він замінюється порожнім обєктом)
  options = options || {};

  // Витягування значень, або використання значень за замочуванням
  const repeatTimes = options.repeatTimes || 1; // витягування к-сті повторень або використання значення по дефолту (1).
  const separator = options.separator || '+'; // витягування роздільника або використання значення по дефолту '+'
  const addition = options.addition !== undefined ? String(options.addition) : ''; // витягування додаткового рядка, або використання значення по дефолту ('')
  const additionRepeatTimes = options.additionRepeatTimes || 1; // витягування к-сті повторень додаткового рядка або використання значення по дефолту 1
  const additionSeparator = options.additionSeparator || '|'; // витгування роздільника для додаткового рядка або використання значення по дефолту |

  // Створення додаткового повторюваного рядка
  const repeatedAdditionStr = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  // Створення повторюваного рядка в якому основний рядок повторюється відповіднук-сть разів, до нього дадється додатковий повторюваний рядок з вказаним роздільником
  const repeatedString = Array(repeatTimes).fill(str + repeatedAdditionStr).join(separator);
  

  return repeatedString
}

module.exports = {
  repeater
};
