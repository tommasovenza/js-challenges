function reverseString(str) {
  let responseString = ""

  for (let index = str.length - 1; index >= 0; index--) {
    const element = str[index]
    responseString += element
  }
  return responseString.trim()
}

module.exports = reverseString
