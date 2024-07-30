function countVowels(str) {
  str = str.trim().toLowerCase()

  let counterVowels = 0

  for (let index = 0; index <= str.length; index++) {
    const element = str[index]
    if (
      element === "i" ||
      element === "o" ||
      element === "a" ||
      element === "u" ||
      element === "e"
    ) {
      counterVowels++
    }
  }
  return counterVowels
}

module.exports = countVowels
