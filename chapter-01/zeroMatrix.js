function printMatrix(matrix) {
    console.log('[');
    for (let row of matrix) {
        console.log(' ', row);
    }
    console.log(']');
}

function zeroMatrix(matrix) {
    let coordinates;

    loop1: 
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                coordinates = [i, j];
                break loop1;
            }
        }
    }

    matrix.forEach((row, index) => {
        console.log(index, coordinates[0])
        if (index === coordinates[0]) {
            matrix[index] = new Array(row.length).fill(0);
        }
        row[coordinates[1]] = 0;
    });
    return zeroMatrix;
}

// Testing
const testMatrix = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
];

console.log('before');
printMatrix(testMatrix);

zeroMatrix(testMatrix);

console.log('after');
printMatrix(testMatrix);

  // function should mutate the matrix to the following:
  // [
  //   [1, 0, 1, 1],
  //   [1, 0, 1, 1],
  //   [0, 0, 0, 0],
  //   [1, 0, 1, 1],
  //   [1, 0, 1, 1],
  //   [1, 0, 1, 1]
  // ]