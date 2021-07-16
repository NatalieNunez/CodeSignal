function checkPalindrome(inputString: string): boolean {
    let reverseString: string = inputString.split('').reverse().join('')
    if (inputString === reverseString) {
        return true
    }
    return false
}
