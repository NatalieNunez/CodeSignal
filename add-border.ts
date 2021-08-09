function addBorder(picture: string[]): string[] {
    for (let i = 0; i < picture.length; i++) {
        picture[i] = `*${picture[i]}*`
    }

    const topAndBottomLength = picture[0].length
    const horizontalBorder = '*'.repeat(topAndBottomLength)

    picture.unshift(horizontalBorder)
    picture.push(horizontalBorder)

    return picture
}
