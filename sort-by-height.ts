function sortByHeight(array: number[]): number[] {
  const sortByHeightArray = array.slice().filter(x => x !== -1)

  sortByHeightArray.sort((a, b) => a - b)

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== -1) {
        array.splice(i, 1, sortByHeightArray[0])
        sortByHeightArray.shift()
    }
  }

  return array
}
