function palindromeRearranging(inputString: string) {
    // check if the character is repeated an even amount of times (use % 2)
    // if the character is repeated an even number of times, add to a count variable
    // if the count variable is more than 1, return false
    let count = []
    for (let i = 0; i < inputString.length; i++) {
        count = inputString.match(inputString[i])
        console.log(count)
    }
}
