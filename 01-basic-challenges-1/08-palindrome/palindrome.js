function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "")
  return str === str.split("").reverse().join("")
}

module.exports = isPalindrome
