function palindromeRearranging(inputString: string) {
    // check if the character is repeated an even amount of times (use % 2)
    // if the character is repeated an even number of times, add to a count variable
    // if the count variable is more than 1, return false
    let count = {}
    for (let i = 0; i < inputString.length; i++) {
        if (count[inputString[i]] % 2 !== 0) {
            console.log(count)
            return false
        } else {
            count[inputString[i]] = 1
        }
    }
    return true
}

// function palindromeRearranging(inputString) {
//     return inputString.split('').sort().join('').replace(/(\w)\1/g,'').length < 2;
// }
