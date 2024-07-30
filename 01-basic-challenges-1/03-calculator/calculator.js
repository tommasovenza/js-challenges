function calculator(num, num2, operator) {
  if (operator === "+") {
    return num + num2
  } else if (operator === "-") {
    return num - num2
  } else if (operator === "*") {
    return num * num2
  } else {
    return num / num2
  }
}

module.exports = calculator
