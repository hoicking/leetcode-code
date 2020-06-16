function checkSymbol(str){
    const len = str.length

    const map ={
        ')': '(',
        ']': '[',
        '}': '{'
    }

    let i = 0
    let array =[]
    while (i < len) {
        if(['{','[','('].indexOf(str[i])> -1){
            array.push(str[i])
        }else{
            if( array[array.length - 1]!== map[str[i]] ){
                return false
            }
            array.pop()
        }

        i++
    }

    if(array.length > 0){
        return false
    }
    return true
}

console.log(checkSymbol("{[]}"))