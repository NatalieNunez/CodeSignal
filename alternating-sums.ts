function alternatingSums(a: number[]): number[] {
    let team1 = 0
    let team2 = 0
    for (let i = 0; i < a.length; i++) {
        if (i % 2) {
            team2 += a[i]
        } else {
            team1 += a[i]
        }
    }
    return [team1, team2]
}
