function findMaxNumber(numbersArray) {
  var max = 0

  for (let index = 0; index <= numbersArray.length; index++) {
    const currentNumber = numbersArray[index]

    if (max < parseInt(currentNumber)) {
      max = parseInt(currentNumber)
    }
  }

  return max
}

// const max = findMaxNumber([
//   100, 1000, 8000, 3, 4, 6, 100, 2000, 8001, 8000, 7999,
// ])

module.exports = findMaxNumber
