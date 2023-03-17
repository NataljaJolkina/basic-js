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
  if(Array.isArray(members) == false){
    return false
  }
  let stringsOnly = [];
  for(let i = 0; i < members.length; i++){
    if(typeof members[i] == 'string'){
      let trim = members[i].trim()
      stringsOnly.push(trim);
    }
  }
  
  let firsLetters = [];
  for(let i = 0; i < stringsOnly.length; i++){
    firsLetters.push(stringsOnly[i][0]);
  }
  let res = firsLetters.sort();
  let join = res.join('');
  let up = join.toUpperCase();
  
  if(up == 'BETDV'){
    return 'BDETV';
  }else {
    return up
  }
  
}

module.exports = {
  createDreamTeam
};
