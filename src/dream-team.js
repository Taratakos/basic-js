const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // Первірка чи вхідні дані є масивом
  if (!Array.isArray(members)) {
    return false
  }

  // фільтр лише ті ел, які є рядками.
  // масив, у якому кожен рядок обрізається до його першої літери, приведеної до верхнього регістру.
  const dreamTeamLetters = members
    .filter(member => typeof member === 'string')
    .map(member => member.trim()[0].toUpperCase());
  // первірка чи наявна хоча б одна валідна літера
  if (dreamTeamLetters === 0) {
    return false
  }
  // Сортування літер і обєднання їх в абревіатуру
  const dreamTeamName = dreamTeamLetters.sort().join('')

  return dreamTeamName
}

module.exports = {
  createDreamTeam
};
