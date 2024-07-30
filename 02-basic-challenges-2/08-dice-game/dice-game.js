function diceGameSimulation(numSimulations) {
  const result = []

  for (let index = 0; index < numSimulations; index++) {
    const firstLaunch = Math.floor(Math.random() * 6 + 1)
    const secondLaunch = Math.floor(Math.random() * 6 + 1)

    const sum = firstLaunch + secondLaunch
    if (sum == 11 || sum == 7) {
      const item = {
        dice1: firstLaunch,
        dice2: secondLaunch,
        sum: sum,
        result: "win",
      }
      result.push(item)
    } else if (sum == 2 || sum == 3 || sum == 12) {
      const item = {
        dice1: firstLaunch,
        dice2: secondLaunch,
        sum: sum,
        result: "lose",
      }
      result.push(item)
    } else {
      const item = {
        dice1: firstLaunch,
        dice2: secondLaunch,
        sum: sum,
        result: "roll again",
      }
      result.push(item)
    }
  }
  return result
}

module.exports = diceGameSimulation
