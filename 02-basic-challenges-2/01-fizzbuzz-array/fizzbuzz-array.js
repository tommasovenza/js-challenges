function fizzBuzzArray(num) {
  // numbers array
  const numbers = []

  for (let index = 1; index <= num; index++) {
    if (index % 15 === 0) {
      numbers.push("FizzBuzz")
    } else if (index % 5 === 0) {
      numbers.push("Buzz")
    } else if (index % 3 === 0) {
      numbers.push("Fizz")
    } else {
      numbers.push(index)
    }
  }
  return numbers
}

module.exports = fizzBuzzArray
