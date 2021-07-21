function commonCharacterCount(s1: string, s2: string): number {
    let count = 0
    for (let i = 0; i < s1.length; i++) {
        s2.includes(s1[i]) ? count++ : false
    }
    return count
}

// need to fix; its counting every time it includes a value, not taking into account amount of
// common appearances
