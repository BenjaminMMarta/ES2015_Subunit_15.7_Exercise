//--------------------Maps and Sets Exercise--------------------//

//Quick Question #1//
Returns {1,2,3,4}

//Quick Question #2//
Returns "ref"

//Quick Questions #3//
Looks like 0: {Array(3) => true}
Looks like 1: {Array(3) => false}

//hasDuplicate//
const hasDuplicate = array => new Set(array).size !== array.length

//vowelCount//
function hasVowel(character){
  return "aeiou".includes(character);
}

function vowelCount(string){
  const vowelMap = new Map();
  for(let character of string){
    let lowerCaseCharacter = character.toLowerCase()
    if(hasVowel(lowerCaseCharacter)){
      if(vowelMap.has(lowerCaseChar)){
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}