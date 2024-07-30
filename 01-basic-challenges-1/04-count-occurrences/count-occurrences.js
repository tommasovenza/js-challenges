function countOccurrences(str, char) {
  let count = 0

  for (let index = 0; index <= str.length; index++) {
    const element = str[index]
    if (element === char) {
      count++
    }
  }

  return count
}

module.exports = countOccurrences
