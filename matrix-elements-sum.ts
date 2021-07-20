function matrixElementsSum(matrix: number[][]): number {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j]) {
                sum += matrix[i][j]
            } else {
                for (let roomBeneath = i; roomBeneath < matrix.length; roomBeneath++) {
                    matrix[roomBeneath][j] = 0;
                }
            }
        }
    }
    return sum
}
