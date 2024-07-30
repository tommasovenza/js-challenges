function arrayIntersection(arr1, arr2) {
  const intersection = []

  for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index]
    if (arr2.includes(element)) {
      intersection.push(element)
    }
  }
  return intersection
}

module.exports = arrayIntersection
