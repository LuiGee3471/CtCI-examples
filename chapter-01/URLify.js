function urlify(string, length) {
    return string.trim().replace(/\s/g, '%20')
}

//TEST
console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');