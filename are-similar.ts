function areSimilar(a: number[], b: number[]): boolean {
    const filterA = a.filter((value, index) => value !== b[index])
    const filterB = b.filter((value, index) => value !== a[index])
    const similar = filterA.length == 0 ||
    (filterA.length == 2 && filterA.join('') == filterB.reverse().join(''))

    return similar
}
