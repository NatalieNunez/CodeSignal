const allLongestStrings = (inputArray: string[]): string[] => {
    let longestStringsArray: string[] = []
    let lengths = inputArray.map(string => string.length)
    const longestLength = Math.max(...lengths)
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length === longestLength) {
            longestStringsArray.push(inputArray[i])
        }
    }
    return longestStringsArray
}
