function sortByHeight(a: number[]): number[] {
    // loop through array
        // if a[i] === -1
        // push the index into an array
        // remove the value at that index

    // sort the new array without the trees from least to greatest
    // loop through indeces array
        // for each index, splice a -1 value at the correct index               into original array

    let indexArray: number[] = []

    for (let i = 0; i < a.length; i++) {
        if (a[i] === -1) {
            indexArray.push(i)
            a.splice(i, 1)
        }
    }
    console.log('indexArray:', indexArray)

    let sortedPeople = a.sort((a, b) => a - b)
    for ( let x = 0; x < indexArray.length; x++) {
        sortedPeople.splice(sortedPeople[x], 0, -1)
    }

    return sortedPeople
}
