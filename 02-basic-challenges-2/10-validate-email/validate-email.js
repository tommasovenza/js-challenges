function validateEmail(email) {
  if (!email.includes("@") || !email.includes(".")) return false

  const emailData = email.split("@")
  if (emailData[0] === null || emailData[0] === "") return false

  return true
}

module.exports = validateEmail
