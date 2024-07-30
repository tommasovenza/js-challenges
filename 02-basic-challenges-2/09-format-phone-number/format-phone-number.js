function formatPhoneNumber(numbers) {
  if (numbers.length !== 10) return "ERR: array number is not correct"

  // check array
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index]
    if (isNaN(element)) return "ERR: in array there is some element wrong!!"
  }

  const firstPart = numbers.slice(0, 3)
  const secondPart = numbers.slice(3, 6)
  const thirdPart = numbers.slice(6, 10)

  const stringWithComma = `(${firstPart}) ${secondPart}-${thirdPart}`

  let string = ""

  for (let index = 0; index < stringWithComma.length; index++) {
    let element = stringWithComma[index]
    if (element === ",") {
      element = ""
    }
    string += element
  }
  return string
}

module.exports = formatPhoneNumber
