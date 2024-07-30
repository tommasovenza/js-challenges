function findMissingLetter(arr) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]
  let isUpperCase = false
  // check length array
  if (arr.length === 0) return

  // check for Uppercase
  if (arr[0] === arr[0].toUpperCase()) {
    isUpperCase = true
  }

  const start = arr[0]
  const end = arr[arr.length - 1]

  if (isUpperCase) {
    const alphabetUpperCase = alphabet.map((char) => char.toUpperCase())

    const indexFirstNum = alphabetUpperCase.indexOf(start)
    const indexSecondNum = alphabetUpperCase.indexOf(end)
    const subset = alphabetUpperCase.slice(indexFirstNum, indexSecondNum + 1)

    for (const element of subset) {
      if (!arr.includes(element)) {
        return element
      }
    }
  } else {
    const indexFirstNum = alphabet.indexOf(start)
    const indexSecondNum = alphabet.indexOf(end)
    const subset = alphabet.slice(indexFirstNum, indexSecondNum + 1)

    for (const element of subset) {
      if (!arr.includes(element)) {
        return element
      }
    }
  }
}

module.exports = findMissingLetter
