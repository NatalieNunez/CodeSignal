function commonCharacterCount(s1: string, s2: string): number {
    let count = 0
    for (let i = 0; i < s1.length; i++) {
        if (s2.includes(s1[i])) {
            count++
            s2 = s2.replace(s1[i], '')
        }
    }
    return count
}
