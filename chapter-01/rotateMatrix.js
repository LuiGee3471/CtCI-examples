// O(N)만큼의 메모리(복사 배열)를 사용
function rotateMatrix(matrix) {
    let copied = matrix.map(row => row.slice());
    let n = matrix.length;

    for (let i = 0; i < n; i++) {
        let row = matrix[i];
        for (let j = 0; j < n; j++) {
            copied[j][n - i - 1] = row[j];
        }
    }

    return copied;
}

// 임시 값을 사용해서 추가 메모리 사용 없이
function rotateMatrix(matrix) {
    let n = matrix.length;
    for (let layer = 0; layer < n / 2; layer++) {
        let first = layer;
        let last = n - 1 - layer;
        for (let i = first; i < last; i++) {
            // 끝에서 떨어진 거리
            let offset = i - first;
            // 위쪽
            let temp = matrix[first][i];
            // 위쪽 <- 왼쪽
            matrix[first][i] = matrix[last - offset][first]
            // 왼쪽 <- 아래쪽
            matrix[last - offset][first] = matrix[last][last - offset];
            // 아래쪽 <- 오른쪽
            matrix[last][last - offset] = matrix[i][last];
            // 오른쪽 <- 위쪽
            matrix[i][last] = temp;
        }
    }

    return matrix;
}

// 1. 첫 행은 각 배열의 끝 원소 0 -> 3 n - 0
// 2. 2번째 행은 각 배열의 끝 -1 원소 1 -> 2
// 3. 3번째 행은 각 배열의 끝 - 2 원소 2 -> 1
// 2. 마지막 행은 각 배열의 첫 원소 3 -> 0

/* TEST */
const testMatrix = [
    [1, 2, 3, 4], // [1, 0, 0, 1]
    [0, 1, 2, 3], // [0, 0, 1, 2]
    [0, 0, 1, 2], // [0, 1, 2, 3]
    [1, 0, 0, 1]  // [1, 2, 3, 4]
];

const testMatrix2 = [
    [1, 2], // [3, 1]
    [3, 4]  // [4, 2]
];

const testMatrix3 = [
    [1]
];

const testMatrix4 = [
    [1, 2, 3],
    [0, 1, 1],
    [0, 2, 3]
];

console.log(rotateMatrix(testMatrix).join('\n'));
console.log(rotateMatrix(testMatrix2).join('\n'));
console.log(rotateMatrix(testMatrix3).join('\n'));
console.log(rotateMatrix(testMatrix4).join('\n'));

