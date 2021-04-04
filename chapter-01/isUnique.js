// 해시테이블 사용
function everyCharUnique(string) {
    let charAppearence = {};

    for (let char of string) {
        if (charAppearence[char]) {
            return false;
        } else {
            charAppearence[char] = 1;
        }
    }

    return true;
}

// 자료구조 추가 사용 없음
function everyCharUnique(string) {
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        for (let j = i + 1; j < string.length; j++) {
            if (string[j] === char) {
                return false;
            }
        }
    }

    return true;
}

/* TESTS */
console.log(everyCharUnique('abcd'), 'true');
console.log(everyCharUnique('abccd'), 'false');
console.log(everyCharUnique('bhjjb'), 'false');
console.log(everyCharUnique('mdjq'), 'true');
console.log(everyCharUnique('abcdefghijklmnopqrstuvwxyz'), 'true');