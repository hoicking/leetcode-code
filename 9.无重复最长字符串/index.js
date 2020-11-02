const getLen = (s) => {
    let i = 0,
        j = 0,
        maxLen = 0,
        obj = {}

    for (i; i < s.length; ++i) {
        if (obj.hasOwnProperty(s[i])) {
            j = obj[s[i]] + 1 > j ? obj[s[i]] + 1: j
        }
        obj[s[i]] = i
        maxLen = i - j + 1 > maxLen ? i - j + 1 : maxLen
    }

    return maxLen

}

console.log(getLen('dvdf'))

console.log(getLen('abba'))