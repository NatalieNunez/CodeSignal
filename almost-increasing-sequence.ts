function almostIncreasingSequence(sequence: number[]): boolean {
    let timesRemoved = 0
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i-1]) {
            timesRemoved++
            if (timesRemoved > 1) {
                return false
            }
            if (sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) {
                return false
            }
        }
    }
    return true
}
