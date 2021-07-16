function adjacentElementsProduct(inputArray: number[]): number {
    let largestProduct = -Infinity;
    for (let i = 0; i < inputArray.length; i++) {
        let currentProduct: number = inputArray[i] * inputArray[i + 1];
        if (currentProduct > largestProduct) {
            largestProduct = currentProduct
        }
    }
    return largestProduct;
}
