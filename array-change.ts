function arrayChange(array: number[]): number {
    let moves = 0
    let increaseBy = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= array[i + 1]) {
            increaseBy = (array[i] - array[i + 1]) + 1
            array[i + 1] = array[i + 1] + increaseBy
            moves += increaseBy
        }
    }
    return moves
}
