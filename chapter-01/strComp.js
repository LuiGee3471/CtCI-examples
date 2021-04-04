function strComp(string) {
    // 1. 연속되는 애들끼리 묶는다.
    let arr = [];
    let base = string[0];
    let length = 1;
    // 1부터 시작하는 루프는 주석을 남기자
    // 0번째를 기본으로 잡았기 떄문에
    for (let i = 1; i < string.length; i++) {
        let char = string[i];

        if (char == base) {
            length++;
        } else {
            arr.push(base + length);
            base = char;
            length = 1; 
        }
    }
    arr.push(base + length);

    // 2. 갯수를 새서 붙인다.
    let compressed = arr.join('');
    // 3. 원래거보다 긴지 확인한다.
    return compressed.length > string.length ? string : compressed;
}


// Test
console.log('aaaaaa', strComp('aaaaaa'), 'a6');
console.log('aabcccccaaa', strComp('aabcccccaaa'), 'a2b1c5a3');
console.log('abbbbc', strComp('abbbbc'), 'a1b4c1');
console.log('abbbbc', strComp('abbbc'), 'abbbc');