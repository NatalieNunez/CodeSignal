function addBorder(picture: string[]) {
    // find length (length of first index) and add 2
    // find height (length of array) and add 2
    // for side borders, we need to unshift and push an * into each index of the array
    // for top borders, we need to unshift and psuh a value with length + 2 *

    for (let i = 0; i < picture.length; i++) {
        picture[i] = `*${picture[i]}*`
    }
    const topBorderLength = picture[0].length
    const topBorder = '*'.repeat(topBorderLength)
    picture.unshift(topBorder)
    picture.push(topBorder)
    return picture
}
