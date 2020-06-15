// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

function translate(str){
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let i = 0
    let sum = 0
    let pre = 0
    while (i<str.length) {
        if((!pre) || pre >= map[str[i]]){
            sum += map[str[i]]
        }else if(pre < map[str[i]]){
            sum -= pre 
            sum= sum + map[str[i]] -pre
        }
        pre = map[str[i]]
        i++
    }
    return sum
}

console.log(translate('MCMXCIV'))
