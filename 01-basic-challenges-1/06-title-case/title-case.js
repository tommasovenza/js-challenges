function titleCase(str) {
  const words = str.split(" ")

  const newString = words
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(" ")

  return newString
}

module.exports = titleCase
