function findFirstNonRepeatingCharacter(string) {
  // str is now an array
  string = string.trim().split("")

  const counts = {}

  for (const char of string) {
    counts[char] = counts[char] === 1 ? (counts[char] += 1) : (counts[char] = 1)
  }

  for (const key in counts) {
    if (Object.hasOwnProperty.call(counts, key)) {
      const element = counts[key]

      if (element === 1) {
        return key
      }
    }
  }
  return null
}

module.exports = findFirstNonRepeatingCharacter
