function findMissingNumber(array) {
  // case undefined
  if (array === undefined) return undefined
  // case empty array
  if (array.length === 0) return 1
  // else get length
  const length = array.length + 1
  // get firstSum
  const firstSum = (length * (length + 1)) / 2
  // get arraySum
  const arraySum = array.reduce((acc, currentNumber) => {
    return (acc += currentNumber)
  }, 0)

  return firstSum - arraySum
}

module.exports = findMissingNumber
