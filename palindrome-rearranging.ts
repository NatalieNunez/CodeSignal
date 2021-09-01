function palindromeRearranging(inputString: string): boolean {
    return inputString.split('').sort().join('').replace(/(\w)\1/g,'').length < 2;
}
