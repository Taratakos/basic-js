const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // значодження останнього входження сиволу @ в рядок
  const lastIndex = email.lastIndexOf('@');
  // віділення доменної частини починаючи з позиції рісля символу @
  return email.slice(lastIndex + 1);

  // let result;
  // for (let i = 0; i < email.length; i++) {
  //   if (email[i] === "@") {
  //     result = email.slice(i + 1);
  //   }
  // }
  // return result;
}

module.exports = {
  getEmailDomain
};
