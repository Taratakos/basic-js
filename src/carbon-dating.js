const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // перевірка аргумента чи він є наданий і чи є він рядком (згідно вимоги)
  if (typeof sampleActivity !== 'string') {
    return false
  }
  // визначення констант які використовуються для розрахунків в подальшому коді
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  const numericActivity = parseFloat(sampleActivity) // для перетворення рядка в числове значення
  // Перевіряка чи лежить це значення в межах допустимого діапазону від 0 до MODERN_ACTIVITY
  if (isNaN(numericActivity) || numericActivity <= 0 || numericActivity > MODERN_ACTIVITY) {
    return false;
  }
  // обчислюємо константу розпаду k за формулою 0.693/HALF_LIFE_PERIOD
  const k = 0.693 / HALF_LIFE_PERIOD;
  // далі ця константа використовується для розрахунку віку зразка за формулою (ln(MODERN_ACTIVITY/numericActivity)) / k
  const age = Math.ceil((Math.log(MODERN_ACTIVITY / numericActivity)) / k);

  return age

}

module.exports = {
  dateSample
};
