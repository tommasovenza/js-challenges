function areAllCharactersUnique(str) {
  // check if it's an empty string
  if (str === "") return true
  // using set to create a Set of Unique Chars
  const noDuplicates = new Set(str)
  // checking length and size
  if (noDuplicates.size === str.length) {
    return true
  } else {
    return false
  }
}

module.exports = areAllCharactersUnique
