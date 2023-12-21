const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let reverseArr = []; // Масив для зберігання обернених частин доменів
  let objectStat = {}; // Об'єкт для зберігання статистики DNS
  let dns = ''; // Рядок для побудови DNS ієрархії
  //використаємо forEach для перебору кожного елмента в масиві domains. Для кожного домену розбиваємо його на частини і додємо ці обернені частини до масиву reverseArr
  domains.forEach((el) => {
    reverseArr.push(el.split('.').reverse())
  });

  // Зовнішній цикл для перебору обернених доменів
  for (let i = 0; i < reverseArr.length; i++) {
    // Внутрішній цикл для перебору частин в оберненому домені
    for (let k = 0; k < reverseArr[i].length; k++) {
      dns += '.' + reverseArr[i][k]; // Додаємо частину до DNS ієрархії
      // Перевірка, чи вже існує ключ dns в об'єкті objectStat
      if (objectStat[dns]) {
        objectStat[dns] += 1; // Якщо так, збільшуємо лічильник
      } else {
        objectStat[dns] = 1 // Якщо ні, створюємо новий ключ і встановлюємо лічильник на 1
      }
    }

    dns = '' // Обнуляємо рядок для наступного оберненого домену
  }

  return objectStat // Повертаємо згенеровану статистику DNS

}

module.exports = {
  getDNSStats
};
