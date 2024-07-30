function removeDuplicates(arr) {
  const unique = []

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index]
    // console.log(arr.indexOf(element))

    if (arr.indexOf(element) === index) {
      unique.push(element)
    }
  }
  return unique
}

// function removeDuplicates(arr) {
//   const unique = new Set(arr)
//   return Array.from(unique)
// }

module.exports = removeDuplicates
