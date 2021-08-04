function sortByHeight(a: number[]) {
    const sortByHeightArray = []

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== -1) {
            sortByHeightArray.push(a[i])
        }
    }

    sortByHeightArray.sort((a, b) => a - b)

    for (let x = 0; x < a.length; x++) {
        if (a[x] !== -1) {
            a[x] = 0
        }
    }

    for (let z = 0; z < a.length; z++) {
        if (a[z] === 0) {
            a.splice(z, 0, sortByHeightArray[0])
            sortByHeightArray.shift()
        }
    }

    return a
}

// works i believe but is way too slow
