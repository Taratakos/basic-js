const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  // метод повертає поточну довжину ланцюга
  getLength() {
    return this.chain.length;
  },

  // метод додає до ланцюга лінк зі вказаним значенням
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },

  // метод видаляє ланцюг на зазначеній position з ланцюга. Перевіряється правильність позиції, і якщо вона неправильна, викидається помилка з відповідним повідомленням.
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position <= 0 ||
      position > this.chain.length ||
      Math.floor(position) !== position
    ) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  // метод реверсує порядок ланцюга
  reverseChain() {
    this.chain.reverse();
    return this;
  },

  // метод завершує ланцюг, конвертує його в рядок і очищає ланцюг для подальшого використання
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker
};
