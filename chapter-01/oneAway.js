function oneAway(str1, str2) {
    if (Math.abs(str1.length - str2.length) > 1) {
        return false;
    }

    let charAppearence = {};

    for (let char of str1) {
        charAppearence[char] = charAppearence[char] ? charAppearence[char] + 1 : 1;
    }

    for (let char of str2) {
        charAppearence[char]--;
        if (!charAppearence[char]) {
            delete charAppearence[char];
        }
    }

    return Object.keys(charAppearence).length === 1;
}

// Test
console.log(oneAway('it', 'cant'), false);
console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);
console.log(oneAway('pade', 'fade'), true);