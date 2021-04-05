String.prototype.isSubstring = function (str) {
    return str.includes(this);
}

function stringRotation(s1, s2) {
    return s1.isSubstring(s2 + s2)
}

// Test
console.log(stringRotation('waterbottle', 'erbottlewat'), true);
console.log(stringRotation('waterbottle', 'erbotlewatt'), false);
console.log(stringRotation('aaata', 'aataa'), true);