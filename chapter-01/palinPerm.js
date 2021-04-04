function palinPerm(string) {
    let charApperence = {};

    for (let char of string) {
        if (char === ' ') continue;
        char = char.toLowerCase();
        if (charApperence[char]) {
            charApperence[char]++;
        } else {
            charApperence[char] = 1;
        }
    }

    let odd = false;
    for (let char of Object.keys(charApperence)) {
        if (charApperence[char] % 2 === 1) {
            if (odd) return false;
            else odd = true;
        }
    }

    return true;
}

// TESTS
console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');
console.log(palinPerm('No lemon, no melono'), true);
console.log(palinPerm('Eva can I see bees in a cave'), true);