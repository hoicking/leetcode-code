function checkSymbol(str){
    const len = str.length

    const map ={
        '{': '}',
        '[': ']',
        '(': ')'
    }

    let i = 0
    while (i < len/2) {
        if(map[str[i]] !== str[len - i - 1] && 
           ( map[str[i]]!==str[i + 1] && i%2 !==0) &&
           ( map[str[i]]!==str[i + 1] && i%2 ===0)
           ){
            console.log(str[i],str[len - i - 1])
            return false
        }
        i++
    }
    return true
}

console.log(checkSymbol("{{)}"))