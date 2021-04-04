function checkPermute(str1, str2) {
    if (str1.length !== str2.length) return false;

    let charAppearence = {};

    for (let i = 0; i < str1.length; i++) {
        let char1 = str1[i];
        let char2 = str2[i];

        if (charAppearence[char1]) {
            charAppearence[char1] += 1;
        } else {
            charAppearence = 1;
        }

        if (charAppearence[char2]) {
            charAppearence[char2] -=1;
        } else {
            charAppearence = -1;
        }
    }

    for (let char of Object.keys(charAppearence)) {
        if (charAppearence[char] !== 0) return false;
    }

    return true;
}

// Tests
console.log(checkPermute('aba', 'aab'), true);
console.log(checkPermute('abaaadscasva', 'abaaaadscbsv'), true);
console.log(checkPermute('aba', 'aaba'), false);
console.log(checkPermute('aba', 'aa'), false);