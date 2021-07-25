function isLucky(n: number): boolean {
    let numberString = n.toString()
    let length = numberString.length
    let firstHalfSum = 0
    let secondHalfSum = 0
    for (let i = 0; i < length; i++) {
        if (i < length / 2) {
            firstHalfSum += Number(numberString[i])
        } else {
            secondHalfSum += Number(numberString[i])
        }
    }
    return firstHalfSum === secondHalfSum
}
